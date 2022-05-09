<script lang="ts">
  import { meta, router } from 'tinro'

  const route = meta()

  function back() {
    if (!route.from) {
      router.goto('/home')
    } else {
      history.back()
    }
  }
</script>

<div
  class="min-h-screen py-6 sm:flex flex-col justify-center sm:py-12 fixed z-50 inset-0 overflow-y-auto h-full w-full px-4"
>
  <div
    class="bg-white dark:bg-[#1f2940] backdrop-blur-lg mx-auto w-full lg:w-[54rem] rounded shadow-xl py-10 text-center"
  >
    <h1 class="text-4xl mb-8">ارتباط با ما</h1>

    <a
      href="/"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      on:click|preventDefault={back}>برگرد به خانه</a
    >
  </div>
</div>
