<script setup>
import { RouterLink } from 'vue-router';
import Category1 from '@/assets/img/beach.jpg';
import Category2 from '@/assets/img/Mountains.jpeg';
import Category3 from '@/assets/img/City_Guides.jpeg';
import Category4 from '@/assets/img/Adventure.jpeg';
import Category5 from '@/assets/img/Food_Travel.jpg';
import Category6 from '@/assets/img/luxury.jpeg';

const categories = [
  {
    name: 'Beaches',
    description: 'Explore beautiful beaches around the world.',
    image: Category1,
  },
  {
    name: 'Mountains',
    description: 'Discover scenic mountain destinations.',
    image: Category2,
  },
  {
    name: 'City Guides',
    description: 'Get to know the best cities for travel.',
    image: Category3,
  },
  {
    name: 'Adventure',
    description: 'For the adventurous soul, thrilling experiences await.',
    image: Category4,
  },
  {
    name: 'Food & Travel',
    description: 'Explore the world through its cuisine.',
    image: Category5,
  },
  {
    name: 'Luxury',
    description: 'Indulge in luxurious travel experiences.',
    image: Category6,
  },
];
</script>

<template>
  <div class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Explore Our Travel Categories</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <RouterLink :to="category.link" class="block">
            <img :src="category.image" alt="Category Image" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ category.name }}</h3>
              <p class="text-gray-600 text-sm">{{ category.description }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

