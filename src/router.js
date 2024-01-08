import { createRouter, createWebHistory } from 'vue-router';
import CarHome from './views/CarHome.vue';
import SearchCars from './views/SearchCars.vue';

const routes = [
  {
    path: '/',
    name: 'CarHome',
    component: CarHome,
  },
  {
    path: '/cars',
    name: 'cars',
    component: SearchCars,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
