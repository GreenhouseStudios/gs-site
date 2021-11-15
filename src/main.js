import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'
import 'tachyons/css/tachyons.min.css'
import InfiniteLoading from 'vue-infinite-loading';
import VueLazyload from 'vue-lazyload'

Vue.use(InfiniteLoading, { /* options */ });

Vue.config.productionTip = false

Vue.use(VueLazyload,{
  // set observer to true
  observer: true,
  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
});
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
