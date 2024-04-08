<template>
  <div>
    <nav class="border-gray-200 bg-accent dark:bg-gray-900">
      <div
        class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto"
      >
        <a
          href="https://waizly.id/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://media.licdn.com/dms/image/D560BAQF8vJqnB_KAHg/company-logo_200_200/0/1707212492465/waizly_logo?e=2147483647&v=beta&t=F48K6eD2Db6ACThcBcww_iDgsFCk5JPlOyZMismOkuc"
            class="h-8"
            alt="Waizly logo"
          />
        </a>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col mt-4 font-medium border rounded-lg md:p-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <NuxtLink
                to="/"
                class="block px-3 py-2 mr-3 text-gray-900 rounded md:p-0 font-weight-bold md:bg-transparent md:dark:text-primary"
                :class="{
                  'text-primary': $route.path === '/',
                  'text-gray-900': $route.path !== '/',
                }"
                aria-current="page"
                >Todo</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/weather"
                class="block px-3 py-2 text-gray-900 rounded md:p-0 font-weight-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                :class="{
                  'text-gray-900': $route.path !== '/weather',
                  'text-primary': $route.path === '/weather',
                }"
                >Weather</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts"></script>
