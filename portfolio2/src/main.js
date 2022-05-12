import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core' 
import { 
  faHeart, 
  faCirclePause, 
  faCirclePlay, 
  faArrowUpRightFromSquare, 
  faForwardStep,
  faBackwardStep,
  faLocationDot
  }
  from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHeart, 
  faCirclePause, 
  faCirclePlay, 
  faArrowUpRightFromSquare,
  faForwardStep,
  faBackwardStep,
  faLocationDot
  )
Vue.component('font-awesome-icon', FontAwesomeIcon)

import {
  faFacebook,
  faInstagram
  } from '@fortawesome/free-brands-svg-icons'
library.add(
  faFacebook,
  faInstagram
  )

Vue.config.productionTip = false

new Vue({
  el : '#app',
  components : {App},
  template : '<App/>',
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
