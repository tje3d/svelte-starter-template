import { get, writable, type Writable } from 'svelte/store'
import { Service } from 'typedi'
import ColorsDark from '../assets/colors/dark'
import ColorsLight from '../assets/colors/light'
import BaseService from './Base'

@Service()
export default class ThemeService extends BaseService {
  transitionStyle?: HTMLStyleElement
  style?: HTMLStyleElement

  defaultTheme: Themes = 'light'
  theme: Writable<Themes> = writable(this.defaultTheme)

  timeoutClearTrans?: NodeJS.Timeout

  async init() {
    if (get(this.initialized)) {
      return
    }

    this.transitionStyle = document.createElement('style')
    this.transitionStyle.setAttribute('type', 'text/css')
    document.head.appendChild(this.transitionStyle)

    this.style = document.createElement('style')
    this.style.setAttribute('type', 'text/css')
    document.head.appendChild(this.style)

    this.theme.set(this.loadTheme())

    // Apply theme
    this.applyByName(get(this.theme), true)

    this.initialized.set(true)
  }

  async destroy() {
    if (this.transitionStyle) {
      document.head.removeChild(this.transitionStyle)
    }

    if (this.style) {
      document.head.removeChild(this.style)
    }

    for (const key in this) {
      delete this[key]
    }
  }

  /**
   * Load theme from storage
   * @returns Themes
   */
  loadTheme(): Themes {
    return (localStorage.getItem('theme') || this.defaultTheme) === 'light'
      ? 'light'
      : 'dark'
  }

  /**
   * Save theme to storage
   * @param theme Themes
   */
  saveTheme(theme: Themes) {
    localStorage.setItem('theme', theme)
  }

  //
  // ─── METHODS ────────────────────────────────────────────────────────────────────
  //

  /**
   * Turn an object to css variables
   * @param input object
   */
  apply(theme: Themes, input: object, isInitial: boolean) {
    if (!isInitial) {
      this.theme.set(theme)
      this.saveTheme(theme)

      if (!this.transitionStyle.firstChild) {
        this.transitionStyle.appendChild(
          document.createTextNode('* {transition: background-color ease 0.3s}'),
        )
      }

      if (this.timeoutClearTrans) {
        clearTimeout(this.timeoutClearTrans)
      }

      this.timeoutClearTrans = setTimeout(() => {
        if (this.transitionStyle.firstChild) {
          this.transitionStyle.removeChild(this.transitionStyle.firstChild)
        }
      }, 350)
    }

    const variables = Object.entries(input).map(function (item) {
      return `--${item[0]}: ${item[1]};`
    })

    if (this.style.firstChild) {
      this.style.removeChild(this.style.firstChild)
    }

    this.style.appendChild(
      document.createTextNode(`body {${variables.join('')}}`),
    )
  }

  /**
   * Apply Dark Theme
   * @returns Promise<void>
   */
  async dark(isInitial: boolean = false) {
    return this.apply('dark', ColorsDark, isInitial)
  }

  /**
   * Apply Light Theme
   * @returns Promise<void>
   */
  async light(isInitial: boolean = false) {
    return this.apply('light', ColorsLight, isInitial)
  }

  /**
   * Apply theme by name
   * @param name Themes
   */
  async applyByName(name: Themes, isInitial: boolean) {
    switch (name) {
      case 'light':
        return this.light(isInitial)
      case 'dark':
        return this.dark(isInitial)
    }
  }

  /**
   * Toggle theme
   * @returns Promise<void>
   */
  async toggle() {
    if (get(this.theme) === 'light') {
      return this.dark()
    }

    return this.light()
  }
}

export type Themes = 'dark' | 'light'
