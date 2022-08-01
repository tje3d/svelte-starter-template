<script lang="ts">
  import * as yup from 'yup'
  import logo from '../assets/img/logo.svg'
  import focus from '../directives/Focus'
  import { fly } from 'svelte/transition'

  let loginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })

  let values = {
    email: '',
    password: '',
  }

  let errors = {}

  async function onSubmit() {
    errors = {}

    try {
      const data = await loginSchema.validate(values, {
        abortEarly: false,
      })
    } catch (error) {
      errors = error.inner.reduce((p, c) => {
        p[c.path] = c.message

        return p
      }, {})
    }
  }
</script>

<div class="w-12 ">
  <img src={logo} alt="Logo" />
</div>

<div class="mt-8 text-4xl font-extrabold tracking-tight leading-tight">
  Sign in
</div>

<div class="flex items-baseline mt-0.5 font-medium ">
  <div>Don't have an account?</div>
  <a class="ml-1 text-blue-500 hover:underline font-bold" href="/signup">
    Sign up
  </a>
</div>

<form class="mt-10" action="" on:submit|preventDefault={onSubmit}>
  <div class="mb-6">
    <label for="email" aria-owns="email" class="block mb-2">
      Email address
      <span aria-hidden="true">*</span>
    </label>

    <input
      type="text"
      id="email"
      class="w-full rounded border border-gray-300 focus:outline-none bg-transparent shadow-sm px-4 min-h-[3rem]"
      use:focus
      bind:value={values.email}
      class:focus:border-blue-500={!('email' in errors)}
      class:border-red-500={'email' in errors}
    />

    {#if 'email' in errors}
      <div class="mt-2 text-red-500 text-sm" in:fly|local={{ y: -10 }}>
        {errors['email']}
      </div>
    {/if}
  </div>

  <div class="mb-6">
    <label for="password" aria-owns="password" class="block mb-2">
      Password
      <span aria-hidden="true">*</span>
    </label>

    <input
      type="password"
      id="password"
      class="w-full rounded border border-gray-300 focus:outline-none bg-transparent shadow-sm px-4 min-h-[3rem]"
      bind:value={values.password}
      class:focus:border-blue-500={!('password' in errors)}
      class:border-red-500={'password' in errors}
    />

    {#if 'password' in errors}
      <div class="mt-2 text-red-500 text-sm" in:fly|local={{ y: -10 }}>
        {errors['password']}
      </div>
    {/if}
  </div>

  <div class="flex justify-between items-center mb-8">
    <label class="flex cursor-pointer select-none">
      <span class="flex items-center mr-2"><input type="checkbox" /></span>
      <span>Remember me</span>
    </label>

    <a href="#" class="text-sm text-blue-500 font-bold hover:underline"
      >Forgot password?</a
    >
  </div>

  <div class="mb-8">
    <button
      type="submit"
      class="block w-full p-4 h-12 transition-colors bg-blue-500 hover:bg-blue-600 text-white rounded-3xl"
      >Sign in</button
    >
  </div>

  <div class="flex items-center mb-8">
    <div class="flex-auto border-t" />
    <div class="mx-2 text-gray-500">Or continue with</div>
    <div class="flex-auto border-t" />
  </div>

  <div class="flex items-center space-x-4">
    <div
      class="flex items-center justify-center transition-colors h-10 rounded-3xl w-full border border-gray-300 text-gray-500 hover:bg-gray-200 cursor-pointer"
    >
      <svg
        x="48"
        y="192"
        viewBox="0 0 24 24"
        height="100%"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        class="w-5 h-5"
      >
        <path
          fill="none"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1v0h3z"
        />
      </svg>
    </div>
    <div
      class="flex items-center justify-center transition-colors h-10 rounded-3xl w-full border border-gray-300 text-gray-500 hover:bg-gray-200 cursor-pointer"
    >
      <svg
        x="432"
        y="480"
        viewBox="0 0 24 24"
        height="100%"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        class="w-5 h-5"
      >
        <path
          fill="none"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          d="M23 3c-.9.642-1.943 1.164-3.063 1.509l-.077.021A4.48 4.48 0 0012 7.47v.063-.003 1a10.646 10.646 0 01-8.977-4.496l-.022-.033s-4 9 5 13A11.54 11.54 0 01.978 19l.023.001c9 5 20 0 20-11.5a4.5 4.5 0 00-.085-.859l.005.029a7.717 7.717 0 002.069-3.617l.011-.053z"
        />
      </svg>
    </div>
    <div
      class="flex items-center justify-center transition-colors h-10 rounded-3xl w-full border border-gray-300 text-gray-500 hover:bg-gray-200 cursor-pointer"
    >
      <svg
        x="1056"
        y="192"
        viewBox="0 0 24 24"
        height="100%"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        class="w-5 h-5"
      >
        <path
          fill="none"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.36 3.36 0 00-.941-2.611l.001.001c3.14-.35 6.44-1.54 6.44-7a5.422 5.422 0 00-1.502-3.752L20 4.77a4.97 4.97 0 00.32-1.773c0-.722-.151-1.408-.423-2.03L19.91 1S18.73.65 16 2.48c-1.05-.296-2.255-.466-3.5-.466s-2.45.17-3.594.488L9 2.48C6.27.65 5.09 1 5.09 1a4.992 4.992 0 00-.41 1.997c0 .637.117 1.246.332 1.807L5 4.769A5.418 5.418 0 003.5 8.52v.03-.002c0 5.42 3.3 6.61 6.44 7a3.357 3.357 0 00-.939 2.591L9 18.128v3.87"
        />
      </svg>
    </div>
  </div>
</form>
