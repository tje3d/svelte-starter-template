<script lang="ts">
  import { active, Route } from 'tinro'
  import Container from 'typedi'
  import ThemeService from '../services/ThemeService'

  const themeService = Container.get(ThemeService)

  function toggleTheme() {
    themeService.toggle()
  }
</script>

<div
  class="min-h-screen py-6 sm:flex flex-col justify-center sm:py-12 fixed z-50 inset-0 overflow-y-auto h-full w-full px-4"
>
  <div
    class="bg-white dark:bg-[#1f2940] backdrop-blur-lg mx-auto w-full lg:w-[54rem] rounded shadow-xl"
  >
    <div class="border-b border-gray-200 dark:border-gray-700">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
      >
        <li class="ml-2 tab__item">
          <a class="group" href="/home/tab1" use:active>
            <svg
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              /></svg
            >پروفایل
          </a>
        </li>
        <li class="ml-2 tab__item">
          <a href="/home/tab2" class="group" aria-current="page" use:active>
            <svg
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              /></svg
            >داشبورد
          </a>
        </li>
        <li class="ml-2 tab__item">
          <a href="/home/tab3" class="group" use:active>
            <svg
              class="ml-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
              /></svg
            >تنظیمات
          </a>
        </li>
        <li class="ml-2 tab__item">
          <a href="/home/tab4" class="group" use:active>
            <svg
              class="ml-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              /></svg
            >ارتباط با ما
          </a>
        </li>
      </ul>
    </div>

    <Route path="/tab1">
      <div class="py-10 px-8">Tab1</div>
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
