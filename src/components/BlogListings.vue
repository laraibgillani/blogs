<script setup>
import BlogListing from './BlogListing.vue';
import blog1 from '@/assets/img/blog-1.jpg';
import blog2 from '@/assets/img/blog-2.jpeg';
import blog3 from '@/assets/img/blog-3.jpg';
import blog4 from '@/assets/img/blog-4.jpeg';
import blog5 from '@/assets/img/blog-5.webp';
import blog6 from '@/assets/img/blog-6.jpeg';
import blog7 from '@/assets/img/blog-7.jpeg';
import blog8 from '@/assets/img/blog-8.jpeg';

const blogs = [
  {
    id: "1",
    title: "Discover the Magic of Paris",
    location: "Paris, France",
    imageUrl: blog1,
  },
  {
    id: "2",
    title: "Adventures in the Alps",
    location: "Swiss Alps, Switzerland",
    imageUrl: blog2,
  },
  {
    id: "3",
    title: "Relax in Bali's Paradise",
    location: "Bali, Indonesia",
    imageUrl: blog3,
  },
  {
    id: "4",
    title: "Explore Ancient Rome",
    location: "Rome, Italy",
    imageUrl: blog4,
  },
  {
    id: "5",
    title: "Safari in the Serengeti",
    location: "Serengeti, Tanzania",
    imageUrl: blog5,
  },
  {
    id: "6",
    title: "Unwind in the Maldives",
    location: "Maldives",
    imageUrl: blog6,
  },
  {
    id: "7",
    title: "Vibrant Streets of Tokyo",
    location: "Tokyo, Japan",
    imageUrl: blog7,
  },
  {
    id: "8",
    title: "The Wonders of Cairo",
    location: "Cairo, Egypt",
    imageUrl: blog8,
  },
];
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-black mb-6 text-center">Blogs</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogListing
          v-for="blog in blogs"
          :key="blog.id"
          :blog="blog"
        />
      </div>
    </div>
  </section>
</template>
