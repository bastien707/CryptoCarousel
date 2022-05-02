import { createRouter, createWebHashHistory } from 'vue-router';
import Address from '../views/FindAddress.vue';
import Home from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/address',
    name: 'address',
    component: Address,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
