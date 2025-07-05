import { createRouter, createWebHistory } from 'vue-router'
import Home1 from '../views/HomePage-1.vue'
import Home2 from '../views/HomePage-2.vue'
import Home3 from '../views/HomePage-3.vue'
import Home4 from '../views/HomePage-4.vue'
import Home5 from '../views/HomePage-5.vue'  
import Home6 from '../views/HomePage-6.vue'
import Home7 from '../views/HomePage-7.vue'
import Home8 from '../views/HomePage-8.vue'
import Home9 from '../views/HomePage-9.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home1',
      component: Home1
    },
    {
      path: '/home2',
      name: 'home2',
      component: Home2
    },
    {
      path: '/home3',
      name: 'home3',
      component: Home3
    },
    {
      path: '/home4',
      name: 'home4',
      component: Home4
    },
    {
      path: '/home5',
      name: 'home5',
      component: Home5
    },
    {
      path: '/home6',
      name: 'home6',
      component: Home6
    },
    {
      path: '/home7',
      name: 'home7',
      component: Home7
    },
    {
      path: '/home8',
      name: 'home8',
      component: Home8
    },
    {
      path: '/home9',
      name: 'home9',
      component: Home9
    }
  ]
})

export default router
