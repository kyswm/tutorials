import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyAU7sXMk2R8KIC6fn46i_LT7R6KpLmzkWA',
  authDomain: 'my-address-app-project.firebaseapp.com',
  databaseURL: 'https://my-address-app-project.firebaseio.com',
  projectId: 'my-address-app-project',
  storageBucket: 'my-address-app-project.appspot.com',
  messagingSenderId: '789493998775',
  appId: '1:789493998775:web:4222199e620a2ec05b5932',
  measurementId: 'G-3KXGKPZWF8'
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,

  //router: router,
  store,

  vuetify,
  render: h => h(App)
}).$mount('#app');
