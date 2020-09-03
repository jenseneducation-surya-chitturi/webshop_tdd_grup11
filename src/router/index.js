import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProductPage from '../views/ProductPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
<<<<<<< HEAD
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
=======
    name: 'AboutPage',
    component: AboutPage
   
  },
  {
    path: '/products',
    name: 'ProductPage',
    component: ProductPage
>>>>>>> b2a4a95d3b14adad0215beb33ea6b07787002b11
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
