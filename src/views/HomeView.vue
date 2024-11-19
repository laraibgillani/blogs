<script setup>
import Hero from '@/components/Hero.vue';
import BlogListings from '@/components/BlogListings.vue';
</script>

<template>
  <Hero />
  <BlogListings :limit="3" :showButton="true" />
</template>
