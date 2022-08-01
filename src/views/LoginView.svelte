<script lang="ts">
  import female1 from '../assets/img/female-1.jpeg'
  import female2 from '../assets/img/female-2.jpeg'
  import male1 from '../assets/img/male-1.jpeg'
  import male2 from '../assets/img/male-2.jpeg'
  import LoginForm from '../components/LoginForm.svelte'
</script>

<div class="flex flex-col flex-auto h-full">
  <div
    class="flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-8"
  >
    <div
      class="flex md:w-full md:max-w-6xl sm:rounded-2xl sm:shadow overflow-hidden sm:bg-white dark:sm:bg-[#1e293b]"
    >
      <!-- Introduction -->
      <div
        class="relative hidden md:flex flex-auto items-center justify-center h-full p-16 lg:px-28 overflow-hidden bg-gray-800 dark:border-r "
      >
        <svg
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 pointer-events-none "
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="100"
            class="text-gray-700 opacity-25 "
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </g>
        </svg>
        <svg
          viewBox="0 0 220 192"
          width="220"
          height="192"
          fill="none"
          class="absolute -top-16 -left-16 text-gray-700 "
        >
          <defs>
            <pattern
              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="220"
            height="192"
            fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
          />
        </svg>
        <div class="z-10 relative w-full max-w-2xl ">
          <div class="text-6xl font-bold leading-none text-gray-100 ">
            <div>Welcome to</div>
            <div>our community</div>
          </div>
          <div class="mt-6 text-lg tracking-tight leading-6 text-gray-400 ">
            Svelte helps developers to build organized and well coded dashboards
            full of beautiful and rich modules. Join us and start building your
            application today.
          </div>
          <div class="flex items-center mt-8 ">
            <div class="flex flex-0 items-center -space-x-1.5 ">
              <img
                src={female1}
                class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover "
                alt="avatar"
              />
              <img
                src={female2}
                class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover "
                alt="avatar"
              />
              <img
                src={male1}
                class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover "
                alt="avatar"
              />
              <img
                src={male2}
                class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover "
                alt="avatar"
              />
            </div>
            <div class="ml-4 font-medium tracking-tight text-gray-400 ">
              More than 17k people joined us, it's your turn
            </div>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div class="w-full sm:w-auto py-8 px-4 sm:p-12 md:p-16">
        <div class="w-full max-w-80 sm:w-80 mx-auto sm:mx-0">
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
</div>
