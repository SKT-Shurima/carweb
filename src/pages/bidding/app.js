import Vue from 'vue';
import App from './App.vue';
import {Pagination} from 'element-ui'
Vue.use(Pagination)

new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})
