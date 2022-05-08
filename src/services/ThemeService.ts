import { get, writable, type Writable } from 'svelte/store'
import { Service } from 'typedi'
import BaseService from './Base'

@Service()
export default class ThemeService extends BaseService {
  defaultTheme: Themes = 'light'
  theme: Writable<Themes> = writable(this.defaultTheme)

  async init() {
    if (get(this.initialized)) {
      return
    }

    const theme = await this.loadTheme()

    // Feed service variables
    this.theme.set(theme)

    // Apply theme
    await this.set(theme)

    this.initialized.set(true)
  }

  async destroy() {
    for (const key in this) {
      delete this[key]
    }
  }

  /**
   * Load theme from storage
   * @returns Promise<Themes>
   */
  async loadTheme(): Promise<Themes> {
    return (localStorage.getItem('theme') || this.defaultTheme) === 'light'
      ? 'light'
      : 'dark'
  }

  /**
   * Save theme to storage
   * @param theme Themes
   * @returns Promise<void>
   */
  async saveTheme(theme: Themes) {
    localStorage.setItem('theme', theme)
  }

  //
  // ─── METHODS ────────────────────────────────────────────────────────────────────
  //

  /**
   * Set active theme and save if already initialized
   * @param theme Themes
   * @returns Promise<void>
   */
  async set(theme: Themes) {
    this.theme.set(theme)

    document.documentElement.className = theme

    if (get(this.initialized)) {
      this.saveTheme(theme)
    }
  }

  /**
   * Apply Dark Theme
   * @returns Promise<void>
   */
  async dark() {
    return this.set('dark')
  }

  /**
   * Apply Light Theme
   * @returns Promise<void>
   */
  async light() {
    return this.set('light')
  }

  /**
   * Apply theme by name
   * @param name Themes
   */
  async applyByName(name: Themes) {
    switch (name) {
      case 'light':
        return this.light()
      case 'dark':
        return this.dark()
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
