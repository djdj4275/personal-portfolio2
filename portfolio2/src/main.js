import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core' 
import { faHeart, 
  faCirclePause, 
  faCirclePlay, 
  faArrowUpRightFromSquare, 
  faForwardStep,
  faBackwardStep
  }
  from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHeart, 
  faCirclePause, 
  faCirclePlay, 
  faArrowUpRightFromSquare,
  faForwardStep,
  faBackwardStep
  )
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  el : '#app',
  components : {App},
  template : '<App/>',
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
