// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// vue-resource plugin provides sservices for web requests and handle responses
// import and make sure to use in middleware
import VueResource from 'vue-resource'

// bypass main App component and create router
// import VueRouter from 'vue-router'

// import bootstrap to use with vue.js
import BootstrapVue from 'bootstrap-vue';
// import styles using style-loader
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// vuejs validations plugin
import VeeValidate from 'vee-validate';
const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  enableAutoClasses: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
};


// import components to be used in routes
import home from './components/home'
// import users from './components/users'
// import test from './components/test'

// register VueRouter in the app
// Vue.use(VueRouter)

// required to use date validators
// var moment = require('moment');
// moment().format("MM-DD-YYYY");

// register BootstrapVue in the app
Vue.use(BootstrapVue);

// register VueResource in middleware
Vue.use(VueResource);

// register VeeValidate in middleware
Vue.use(VeeValidate, config);

// set routes here and import "users" and "test" components
// const router = new VueRouter({
//     mode: 'history',
//     base: __dirname,
//     routes: [
//         // {path: '/', component: users},
//         // {path: '/test', component: test}
//     ]
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
  // router,
  // template: `<div id="app">
  //               <ul>
  //                   <li><router-link to='/'>users</router-link></li>
  //                   <li><router-link to='/test'>test</router-link></li>
  //               </ul>
  //               <router-view></router-view>
  //           </div>
  //           `,
})
// }).$mount('#app')
