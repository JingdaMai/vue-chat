import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bulma/css/bulma.css';

import 'firebase/auth';
import { FirebaseApp } from "./library/Database";

import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
extend('email', email);
extend('min', min);
extend('required', {
  ...required,
  message: 'This field is required'
});

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

let baseApp;

FirebaseApp.auth().onAuthStateChanged(() => {
  if (!baseApp) {
    baseApp = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
})

