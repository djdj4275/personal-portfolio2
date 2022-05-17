import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KakaoMap from '../components/KakaoMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/page',
    name: 'page',
    component: function () {
      return import('../views/PageView.vue')
    }
  },
  {
    path: '/test',
    name: 'test',
    component: function () {
      return import('../views/TestView.vue')
    }
  },
  {
    path: '/kakaomap',
    name: 'kakaomap',
    component: KakaoMap
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
