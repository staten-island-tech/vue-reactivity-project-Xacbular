import { createRouter, createWebHistory } from 'vue-router'
import CookieClicker from '@/views/CookieClicker.vue'
import LoginStatus from '@/views/LoginStatus.vue'
import Playlist from '@/views/Playlist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CookieClicker,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginStatus,
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: Playlist,
    },
  ],
})

export default router

//router link, router push
