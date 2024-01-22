import { createRouter, createWebHistory } from 'vue-router';
import CarHome from './views/CarHome.vue';
import BookCars from './views/BookCars.vue';

const routes = [
  {
    path: '/',
    name: 'CarHome',
    component: CarHome,
  },
  {
    path: '/cars',
    name: 'cars',
    component: BookCars,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
