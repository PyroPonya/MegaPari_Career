import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CareersView from '../views/CareersView.vue';
import CareersEditableView from '../views/CareersEditableView.vue';
import CareerItemView from '../views/CareerItemView.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
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
      component: CareersView,
      props: true,
    },
    {
      path: '/careers/:id_position/:id_vacancy',
      name: 'careerItem',
      component: CareerItemView,
      props: true,
    },
    {
      path: '/careers',
      redirect: '/careers/all',
    },
    {
      path: '/careers_editable/:id_position',
      name: 'careers_editable',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CareersEditableView,
      props: true,
    },
    {
      path: '/careers_editable',
      redirect: '/careers_editable/all',
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
});

export default router;
