<script lang="ts">
  import * as yup from 'yup'
  import logo from '../assets/img/logo.svg'
  import focus from '../directives/Focus'
  import { fly } from 'svelte/transition'

  let signupSchema = yup.object({
    fullname: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    company: yup.string().nullable(),
    rule: yup.bool().required(),
  })

  let values = {
    fullname: '',
    email: '',
    password: '',
    company: '',
    rule: false,
  }

  let errors = {}

  async function onSubmit() {
    errors = {}

    try {
      const data = await signupSchema.validate(values, {
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
  Sign up
</div>

<div class="flex items-baseline mt-0.5 font-medium ">
  <div>Already have an account?</div>
  <a class="ml-1 text-blue-500 hover:underline font-bold" href="/login">
    Sign in
  </a>
</div>

<form class="mt-10" action="" on:submit|preventDefault={onSubmit}>
  <div class="mb-6">
    <label for="fullname" aria-owns="fullname" class="block mb-2">
      Full name
      <span aria-hidden="true">*</span>
    </label>

    <input
      type="text"
      id="fullname"
      class="w-full rounded border border-gray-300 focus:outline-none bg-transparent shadow-sm px-4 min-h-[3rem]"
      use:focus
      bind:value={values.fullname}
      class:focus:border-blue-500={!('fullname' in errors)}
      class:border-red-500={'fullname' in errors}
    />

    {#if 'fullname' in errors}
      <div class="mt-2 text-red-500 text-sm" in:fly|local={{ y: -10 }}>
        {errors['fullname']}
      </div>
    {/if}
  </div>

  <div class="mb-6">
    <label for="email" aria-owns="email" class="block mb-2">
      Email Address
      <span aria-hidden="true">*</span>
    </label>

    <input
      type="email"
      id="email"
      class="w-full rounded border border-gray-300 focus:outline-none bg-transparent shadow-sm px-4 min-h-[3rem]"
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

  <div class="mb-6">
    <label for="company" aria-owns="company" class="block mb-2">
      Company
    </label>

    <input
      type="text"
      id="company"
      class="w-full rounded border border-gray-300 focus:outline-none bg-transparent shadow-sm px-4 min-h-[3rem]"
      bind:value={values.company}
      class:focus:border-blue-500={!('company' in errors)}
      class:border-red-500={'company' in errors}
    />

    {#if 'company' in errors}
      <div class="mt-2 text-red-500 text-sm" in:fly|local={{ y: -10 }}>
        {errors['company']}
      </div>
    {/if}
  </div>

  <div class="flex items-center mb-8">
    <label class="flex items-start cursor-pointer select-none">
      <span class="flex items-center mr-2"><input type="checkbox" /></span>
      <span>
        I agree to the
        <a target="_blank" href="#" class="text-blue-500"> Terms of service </a>
        and
        <a target="_blank" href="#" class="text-blue-500">Privacy Policy</a>
      </span>
    </label>
  </div>

  <div>
    <button
      type="submit"
      class="block w-full p-4 h-12 transition-colors bg-blue-500 hover:bg-blue-600 text-white rounded-3xl"
      >Create your free account</button
    >
  </div>
</form>
