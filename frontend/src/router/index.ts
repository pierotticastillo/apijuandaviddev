import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BooksView,
    },
    {
      path: '/newbooks',
      name: 'newbooks',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewBooksView.vue'),
    },
    {
      path: '/editbooks/:id',
      name: 'editbooks',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EditBookView.vue'),
    },
    // Captura todas las rutas no definidas - Opción 1 (Redirige a Home)
    // { path: '/:pathMatch(.*)*', redirect: '/' },
    
    // Opción 2 (Muestra componente 404)
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ],
})

export default router
