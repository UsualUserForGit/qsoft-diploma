import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cooperation from '../views/Cooperation.vue'
import Portfolio from '../views/Portfolio.vue'
import Contacts from '../views/Contacts.vue'
import Reviews from '../views/Reviews.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/cooperation', name: 'Cooperation', component: Cooperation },
  { path: '/reviews', name: 'Reviews', component: Reviews },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contacts', name: 'Contacts', component: Contacts }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
