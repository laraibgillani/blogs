<template>
    <div class="py-12 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Explore Our Destinations</h1>
          <div class="mb-8 flex justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="filterDestinations(category)"
            class="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {{ category }}
          </button>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            v-for="destination in filteredDestinations"
            :key="destination.id"
            class="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              :src="destination.image"
              :alt="destination.name"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">{{ destination.name }}</h3>
              <p class="text-gray-600">{{ destination.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Paris from '@/assets/img/paris.jpeg';
  import Maldives from '@/assets/img/maldives.jpg';
  import mountEverest from '@/assets/img/mount_Everest.webp';
  import Tokyo from '@/assets/img/Tokyo.jpg';
  import Santorini from '@/assets/img/Santorini.jpeg';
  import SwissAlps from '@/assets/img/Swiss_Alps.jpeg';

  export default {
    name: "DestinationsPage",
    data() {
      return {
        destinations: [
          {
            id: 1,
            name: "Paris",
            description: "The City of Light, known for its art, history, and culture.",
            category: "Cities",
            image: Paris,
          },
          {
            id: 2,
            name: "Maldives",
            description: "Tropical paradise with crystal-clear waters and white sand beaches.",
            category: "Beaches",
            image: Maldives,
          },
          {
            id: 3,
            name: "Mount Everest",
            description: "The world's highest mountain, a dream for mountaineers.",
            category: "Mountains",
            image: mountEverest,
          },
          {
            id: 4,
            name: "Tokyo",
            description: "A vibrant city blending tradition and modernity in Japan.",
            category: "Cities",
            image: Tokyo,
          },
          {
            id: 5,
            name: "Santorini",
            description: "Greece’s stunning island with beautiful sunsets and whitewashed buildings.",
            category: "Beaches",
            image: Santorini,
          },
          {
            id: 6,
            name: "Swiss Alps",
            description: "Majestic snow-capped mountains perfect for skiing and hiking.",
            category: "Mountains",
            image: SwissAlps,
          },
        ],
        categories: ["All", "Cities", "Beaches", "Mountains"],
        filteredDestinations: [],
      };
    },
    mounted() {
      this.filteredDestinations = this.destinations;
    },
    methods: {
      filterDestinations(category) {
        if (category === "All") {
          this.filteredDestinations = this.destinations;
        } else {
          this.filteredDestinations = this.destinations.filter(
            (destination) => destination.category === category
          );
        }
      },
    },
  };
  </script>

  