import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CareerItemView from '../views/CareerItemView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/careers/:id_position',
      name: 'careers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CareersView.vue'),
      props: true,
    },
    {
      path: '/careers/:id_position/:id_vacancy',
      name: 'careerItem',
      component: CareerItemView,
      props: true,
    },
  ],
});

export default router;
