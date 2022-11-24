import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from '../views/Index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'custom',
    component: () => import(/* webpackChunkName: "about" */ '../views/video/index.vue'),
  },
  {
    path: '/room/:id',
    name: 'home',
    component: Index,
  },
  {
    path: '/myroom',
    name: 'myroom',
    component: () => import(/* webpackChunkName: "about" */ '../views/video/myroom.vue'),
  },
  {
    path: '/invite',
    name: 'invite',
    component: () => import(/* webpackChunkName: "about" */ '../views/Invite.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
