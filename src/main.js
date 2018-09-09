// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Foo from './components/foo'
import Bar from './components/bar'



Vue.use(VueRouter)


const router = new VueRouter({
    mode:'history',
    routes: [ 
    	{ path: '/', component: HelloWorld,
    	  children: [ 
    	  	{ path: '/foo', component: Foo},
    	  	{ path: '/bar', component: Bar}	
    	  ]
    	}	
    ],
    linkActiveClass: 'active',
})

new Vue({
  router,
  template: '<App/>',
  components: {
    App
  },
}).$mount('#app')

