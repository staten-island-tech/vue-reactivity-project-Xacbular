import { createRouter, createWebHistory } from 'vue-router'
import CookieClicker from '@/views/CookieClicker.vue'
import UserCreate from '@/views/UserCreate.vue'
import UserList from '@/views/UserList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CookieClicker,
    },
    {
      path: '/usercreate',
      name: 'user-create',
      component: UserCreate,
    },
    {
      path: '/userlist',
      name: 'user-list',
      component: UserList,
    },
  ],
})

export default router
