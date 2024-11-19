<script setup>
defineProps({
  blog: Object, // Blog data passed from the parent
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <h3 class="text-xl font-bold">{{ blog.title }}</h3>
        <img
          :src="blog.imageUrl"
          :alt="blog.title"
          class="rounded-lg w-full h-48 object-cover mt-3"
        />
      </div>
      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ blog.location }}
        </div>
      </div>
    </div>
  </div>
</template>
