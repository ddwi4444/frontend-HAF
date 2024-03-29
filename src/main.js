import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import router from './router'
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue2Editor from "vue2-editor";
import moment from 'moment';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import VueLazyload from 'vue-lazyload'
import AOS from 'aos'
import 'aos/dist/aos.css'
 
Vue.use(VueLazyload)
Vue.use( CKEditor );

// Moment untuk format tanggal
Vue.use(moment);

// Text Editor
Vue.use(Vue2Editor);


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

Vue.prototype.$http = axios;

// Vue.prototype.$baseUrl = 'http://127.0.0.1:8000';
// Vue.prototype.$api = 'http://127.0.0.1:8000/api'; 

Vue.prototype.$baseUrl = 'https://historicalartfantasia.com/api/public'; 
Vue.prototype.$api = 'https://historicalartfantasia.com/api/api'; 

new Vue({
  vuetify,
  router,
  BootstrapVue,
  mounted() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')