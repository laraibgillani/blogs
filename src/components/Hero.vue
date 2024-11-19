<script setup>
import { defineProps } from 'vue';
import bannerImg from '@/assets/img/baner.png';
defineProps({
  title: {
    type: String,
    default: 'Become a Vue Dev',
  },
  subtitle: {
    type: String,
    default: 'Find the Vue job that fits your skills and needs',
  },
  bannerImage: {
    type: String,
  },
});
</script>

<template>
  <section class="py-5 mb-4">
    <img :src="bannerImg" alt="Banner" class="w-full h-[600px] rounded-lg mb-4" />
  </section>
</template>

