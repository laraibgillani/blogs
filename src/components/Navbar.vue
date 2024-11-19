<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo.png';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-20 w-auto" :src="logo" alt="Vue Jobs" />
          </RouterLink>
          <div class="md:ml-auto mt-6">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/destinations"
                :class="[
                  isActiveLink('/destinations')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Destinations</RouterLink
              >
              <RouterLink
                to="/categories"
                :class="[
                  isActiveLink('/categories')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Categories</RouterLink
              >
              <RouterLink
                to="/blogs"
                :class="[
                  isActiveLink('/blogs')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Blogs</RouterLink
              >
              <RouterLink
                to="/contacts"
                :class="[
                  isActiveLink('/contacts')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Contact Us</RouterLink
              >
              <RouterLink
                to="/about-us"
                :class="[
                  isActiveLink('/about-us')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >About Us</RouterLink
              >
              <RouterLink
                to="/faqs"
                :class="[
                  isActiveLink('/faqs')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >FAQ</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
