<template>
    <section class="bg-gray-50 py-12">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-black">About Us</h1>
          <p class="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the story behind our travel blog and the passion that drives us to explore the world and share it with you.
          </p>
        </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img 
              :src="blog" 
              alt="About Us Image" 
              class="w-full h-full object-cover"
            />
          </div>
            <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Our mission is to inspire and empower travelers to explore new destinations, experience diverse cultures, and create unforgettable memories. Through our blog, we aim to provide practical advice, detailed guides, and personal stories to make travel more accessible and enjoyable for everyone.
            </p>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p class="text-gray-700 leading-relaxed">
              Founded by a group of passionate globetrotters, our team has traversed the globe in search of the most amazing destinations, hidden gems, and travel hacks. Whether you're an experienced traveler or a first-timer, we are here to guide you every step of the way.
            </p>
          </div>
        </div>
          <div class="mt-16">
          <h2 class="text-center text-3xl font-bold text-black mb-8">Our Core Values</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Adventure</h3>
              <p class="text-gray-600">
                We believe in exploring the unknown and embracing the thrill of adventure, discovering new horizons, and stepping out of comfort zones.
              </p>
            </div>
            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Community</h3>
              <p class="text-gray-600">
                Travel is about connecting with people and cultures. We strive to foster a community that celebrates diversity and shared experiences.
              </p>
            </div>
            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Sustainability</h3>
              <p class="text-gray-600">
                We are committed to promoting sustainable travel practices to preserve our planet's beauty for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import blog from '@/assets/img/blog-1.jpg';
  </script>
