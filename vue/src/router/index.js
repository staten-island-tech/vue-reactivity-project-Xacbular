import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import LoginStatus from '@/views/LoginStatus.vue'
import Songs from '@/views/Songs.vue'
import Playlists from '@/views/Playlists.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginStatus,
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs,
    },
    {
      path: '/playlists',
      name: 'playlists',
      component: Playlists,
    },
  ],
})

export default router
