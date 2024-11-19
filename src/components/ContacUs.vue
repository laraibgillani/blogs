<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const email = ref('');
const phone = ref('');
const message = ref('');

const handleSubmit = () => {
  if (email.value && phone.value) {
    toast.success('Thank you for contacting us! We will get back to you shortly.');
    email.value = '';
    phone.value = '';
    message.value = '';
  } else {
    toast.error('Please fill out all required fields.');
  }
};
</script>

<template>
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-6 md:p-8">
        <div>
          <h2 class="text-3xl font-bold text-black">Contact Us</h2>
          <p class="mt-3 text-gray-700">
            Have any questions or need assistance with your travel plans? Feel free to get in touch with us. We’re here to help!
          </p>
          <ul class="mt-6 space-y-3">
            <li class="flex items-center space-x-3">
              <span class="text-black font-bold">📧</span>
              <span>support@travelblog.com</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-black font-bold">📞</span>
              <span>+1 (123) 456-7890</span>
            </li>
          </ul>
        </div>
        <div class="bg-blue-50 rounded-lg p-6">
          <h2 class="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p class="mt-2 text-gray-600">Submit your details and we’ll get back to you shortly.</p>
          <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                v-model="email"
                type="email"
                id="email"
                class="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                v-model="phone"
                type="tel"
                id="phone"
                class="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                v-model="message"
                id="message"
                class="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white font-medium rounded-lg px-6 py-3 hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
