import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {Form, Content} from '@/components/base/'
import VueCompositionAPI from '@vue/composition-api'

Vue.component('Form', Form)
Vue.component('Content', Content)
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
