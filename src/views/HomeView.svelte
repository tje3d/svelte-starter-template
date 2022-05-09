<script lang="ts">
  import { active, Route } from 'tinro'
  import Container from 'typedi'
  import IconAccountCircle from '~icons/mdi/account-circle'
  import IconContact from '~icons/mdi/file-document-edit-outline'
  import IconSetting from '~icons/mdi/tune-vertical'
  import IconDashboard from '~icons/mdi/view-dashboard'
  import ThemeService from '../services/ThemeService'
  import TimelineTabView from './TimelineTabView.svelte'

  const themeService = Container.get(ThemeService)

  function toggleTheme() {
    themeService.toggle()
  }
</script>

<div class="py-4">
  <div
    class="bg-white dark:bg-[#1f2940] backdrop-blur-lg mx-auto w-full lg:w-[54rem] rounded shadow-xl max-h-[calc(100vh-2rem)] overflow-hidden"
  >
    <div class="border-b border-gray-200 dark:border-gray-700">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
      >
        <li class="ml-2 tab__item">
          <a class="group" href="/home/tab1" use:active>
            <IconAccountCircle class="ml-2 w-5 h-5" />
            تایم لاین
          </a>
        </li>
        <li class="ml-2 tab__item">
          <a href="/home/tab2" class="group" aria-current="page" use:active>
            <IconDashboard class="ml-2 w-5 h-5" />
            داشبورد
          </a>
        </li>
        <li class="ml-2 tab__item">
          <a href="/home/tab3" class="group" use:active>
            <IconSetting class="ml-2 w-5 h-5" />
            تنظیمات
          </a>
        </li>
        <li class="ml-2 tab__item">
          <a href="/home/tab4" class="group" use:active>
            <IconContact class="ml-2 w-5 h-5" />
            ارتباط با ما
          </a>
        </li>
      </ul>
    </div>

    <Route path="/tab1">
      <TimelineTabView />
    </Route>
    <Route path="/tab2">
      <div class="py-10 px-8">Tab2</div>
    </Route>
    <Route path="/tab3">
      <div class="py-10 px-8">
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          on:click={toggleTheme}>تغییر رنگبندی</button
        >
      </div>
    </Route>
    <Route path="/tab4">
      <div class="py-10 px-8">
        <a
          href="/contact"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">برو به صفحه ارتباط با ما</a
        >
      </div>
    </Route>
    <Route fallback redirect="/home/tab1" />
  </div>
</div>
