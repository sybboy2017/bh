import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
    {
      path: '/',
      name: 'main',
      component: require('../views/main'),
      children: [
      		{
      			 path: '',
      			 component: require('../views/index')
      		},
	      	{
		    	 path: '/product',
		    	 component: require('../views/product')
	    	},
	    	{
		    	 path: '/myaccount',
		    	 component: require('../views/myaccount')
	    	}
      ]
    },
    {
    	path:'/login',
    	name:'login',
    	component:require('../views/login')
    },
    {
    	path:'/register',
    	name:'register',
    	component:require('../views/register')
    },
    {
    	path:'/resetPassword',
    	name:'resetPassword',
    	component:require('../views/resetPassword')
    },
    {
		path:'/registerAgreement',
		component:require('../views/registerAgreement')
    }
  ]
})
