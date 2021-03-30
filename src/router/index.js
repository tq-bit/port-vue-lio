import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => { return import(/* webpackChunkName: "about" */ '../views/About.vue'); }
  },
  {
    path: '/showcase',
    name: 'Showcase',
    component: () => { return import(/* webpackChunkName: "showcase" */ '../views/Showcase.vue'); }
  }
];

const router = new VueRouter({
  routes
});

export default router;
