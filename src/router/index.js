import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomSuites from '../views/RoomSuites.vue'
import Facilities from '../views/Facilities.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/roomsuites',
    name: 'RoomSuites',
    component: RoomSuites,
  },
  {
    path: '/facilities',
    name: 'Facilities',
    component: Facilities,
  },
    {
      path: '/contactpage',
      name: 'Contact',
      component: Contact,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/roomsuites',
    name: 'RoomSuites',
    component: RoomSuites,
  },
  {
    path: '/facilities',
    name: 'Facilities',
    component: Facilities,
  },
  {
    path: '/contactpage',
    name: 'Contact',
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
