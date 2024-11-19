<template>
    <div class="py-12 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h1>
          <div class="space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div
              class="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-50"
              @click="toggleAnswer(index)"
            >
              <h3 class="text-xl font-semibold text-gray-800">{{ faq.question }}</h3>
              <svg
                v-if="isOpen(index)"
                class="w-6 h-6 text-gray-600 transform rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                v-else
                class="w-6 h-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 15l-7-7-7 7"
                />
              </svg>
            </div>
              <div v-show="isOpen(index)" class="px-6 pb-4 text-gray-700">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FAQPage",
    data() {
      return {
        faqs: [
          {
            question: "What is this blog about?",
            answer: "This blog is about sharing travel experiences, tips, guides, and recommendations for travelers around the world.",
          },
          {
            question: "How can I submit my travel story?",
            answer: "You can submit your travel story by contacting us through the contact page, and we'll be happy to review your submission.",
          },
          {
            question: "Do you offer any travel guides?",
            answer: "Yes, we offer detailed travel guides on popular destinations, covering itineraries, budget tips, packing lists, and more.",
          },
          {
            question: "Can I collaborate with you?",
            answer: "Absolutely! We're open to collaboration with other travel bloggers, brands, and tourism boards. Please get in touch via our contact page.",
          },
          {
            question: "Do you have any travel tips for beginners?",
            answer: "Yes, we have several travel tips for beginners on our blog, including how to pack light, choose the right destinations, and save on travel expenses.",
          },
        ],
        openIndex: null,
      };
    },
    methods: {
      toggleAnswer(index) {
        this.openIndex = this.openIndex === index ? null : index;
      },
      isOpen(index) {
        return this.openIndex === index;
      },
    },
  };
  </script>

  