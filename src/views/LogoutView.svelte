<script lang="ts">
  import logo from '../assets/img/logo.svg'
</script>

<div class="flex flex-col flex-auto h-full">
  <div
    class="flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-8"
  >
    <div
      class="flex md:max-w-6xl sm:rounded-2xl sm:shadow overflow-hidden sm:bg-white dark:sm:bg-[#1e293b]"
    >
      <!-- Form Section -->
      <div class="w-full sm:w-auto py-8 px-4 sm:p-12 md:p-16">
        <div class="w-full max-w-80 sm:w-80 mx-auto sm:mx-0">
          <div class="w-12 mx-auto">
            <img src={logo} alt="Logo" />
          </div>

          <div
            class="mt-8 text-3xl font-extrabold tracking-tight leading-tight text-center"
          >
            You have signed out!
          </div>

          <div class="flex justify-center mt-2 font-medium">
            Redirecting in 5 seconds
          </div>

          <div class="text-center text-sm text-gray-500 mt-8">
            Go to <a href="#" class="text-blue-500">sign in</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
