import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/welcome',
    component: () => import('layouts/LoginAndRegistrationLO.vue'),
    children: [
      {
        path: '',
        name: 'login',
        meta: { anonymous: true },
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: '/welcome/reg',
        name: 'register',
        meta: { anonymous: true },
        component: () => import('pages/RegPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
