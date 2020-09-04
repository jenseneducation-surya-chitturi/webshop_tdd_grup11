import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import ContactPage from '@/views/ContactPage.vue'

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/products',
    component: ProductPage
  },
  {
    path: '/contact',
    component: ContactPage
  }

]

