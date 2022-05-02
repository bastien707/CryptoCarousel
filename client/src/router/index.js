import { createRouter, createWebHashHistory } from 'vue-router';
import Address from '../views/FindAddress.vue';
import Home from '../views/HomePage.vue';
import About from '../views/AboutView.vue';

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
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
