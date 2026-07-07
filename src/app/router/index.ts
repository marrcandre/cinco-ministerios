import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/app/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/TestView.vue'),
      },
      {
        path: 'result',
        name: 'result',
        component: () => import('@/views/ResultView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
