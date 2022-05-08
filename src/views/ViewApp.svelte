<script lang="ts">
  import { fly, scale } from 'svelte/transition'
  import Container from 'typedi'
  import focus from '../directives/Focus'
  import ThemeService from '../services/ThemeService'
  import IconPerson from '~icons/mdi/person-circle'

  const themeService = Container.get(ThemeService)

  function toggleTheme() {
    themeService.toggle()
  }
</script>

<div
  class="min-h-screen py-6 sm:flex flex-col justify-center sm:py-12 fixed z-50 inset-0 overflow-y-auto h-full w-full px-4"
>
  <div in:fly={{ delay: 250, duration: 450, y: -20 }}>
    <h1 class="text-center text-4xl mb-1">
      <div class="w-8 h-8 inline-block align-middle">
        <IconPerson />
      </div>
      ایجاد اکانت
    </h1>
    <h1 class="text-center opacity-75 text-sm mb-4">
      لطفا اطلاعات شخصی خود را بصورت کامل وارد نمایید
    </h1>
  </div>
  <form
    class="bg-white bg-opacity-[0.9] backdrop-blur-lg px-7 py-12 mx-auto w-full lg:w-[54rem] rounded shadow-xl origin-top"
    in:scale={{ delay: 150, duration: 550, start: 0.8 }}
  >
    <div class="relative z-0 mb-8 w-full group">
      <input
        type="email"
        name="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required={true}
        autocomplete="off"
        use:focus
      />
      <label
        for="floating_email"
        class="absolute text-xs text-gray-500 duration-300 transform -translate-y-6 top-3 -z-10 peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:-translate-y-6"
        >آدرس ایمیل</label
      >
    </div>
    <div class="relative z-0 mb-8 w-full group">
      <input
        type="password"
        name="floating_password"
        id="floating_password"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required={true}
        autocomplete="off"
      />
      <label
        for="floating_password"
        class="absolute text-xs text-gray-500 duration-300 transform -translate-y-6 top-3 -z-10 peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:-translate-y-6"
        >رمزعبور</label
      >
    </div>
    <div class="relative z-0 mb-8 w-full group">
      <input
        type="password"
        name="repeat_password"
        id="floating_repeat_password"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required={true}
        autocomplete="off"
      />
      <label
        for="floating_repeat_password"
        class="absolute text-xs text-gray-500 duration-300 transform -translate-y-6 top-3 -z-10 peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:-translate-y-6"
        >تایید رمزعبور</label
      >
    </div>
    <div class="grid xl:grid-cols-2 xl:gap-6">
      <div class="relative z-0 mb-8 w-full group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required={true}
          autocomplete="off"
        />
        <label
          for="floating_first_name"
          class="absolute text-xs text-gray-500 duration-300 transform -translate-y-6 top-3 -z-10 peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:-translate-y-6"
          >نام</label
        >
      </div>
      <div class="relative z-0 mb-8 w-full group">
        <input
          type="text"
          name="floating_last_name"
          id="floating_last_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required={true}
          autocomplete="off"
        />
        <label
          for="floating_last_name"
          class="absolute text-xs text-gray-500 duration-300 transform -translate-y-6 top-3 -z-10 peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:-translate-y-6"
          >نام خانوادگی</label
        >
      </div>
    </div>
    <div class="grid xl:grid-cols-2 xl:gap-6">
      <div class="relative z-0 mb-8 w-full group">
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="floating_phone"
          id="floating_phone"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required={true}
          autocomplete="off"
        />
        <label
          for="floating_phone"
          class="absolute text-xs text-gray-500 duration-300 transform -translate-y-6 top-3 -z-10 peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:-translate-y-6"
          >شماره همراه (123-456-7890)</label
        >
      </div>
      <div class="relative z-0 mb-8 w-full group">
        <input
          type="text"
          name="floating_company"
          id="floating_company"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required={true}
          autocomplete="off"
        />
        <label
          for="floating_company"
          class="absolute text-xs text-gray-500 duration-300 transform -translate-y-6 top-3 -z-10 peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:-translate-y-6"
          >نام شرکت (مثال: گوگل)</label
        >
      </div>
    </div>
    <button
      type="submit"
      class="btn-primary"
      on:click|preventDefault={toggleTheme}>ثبت نام</button
    >
  </form>
</div>
