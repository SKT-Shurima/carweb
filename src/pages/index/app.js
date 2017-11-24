import Vue from 'vue'
import App from './App.vue'
import {Carousel,CarouselItem} from 'element-ui'
Vue.use(Carousel)
Vue.use(CarouselItem)

new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})
