import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import BlogsView from '@/views/BlogsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ContactView from '@/views/ContactView.vue';
import AboutView from '@/views/AboutView.vue';
import DestinationView from '@/views/DestinationView.vue';
import FaqView from '@/views/FaqView.vue';
import CategoriesView from '@/views/CategoriesView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: DestinationView,
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView,
    },
    {
      path: '/contacts',
      name: 'contacts-us',
      component: ContactView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutView,
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: FaqView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
