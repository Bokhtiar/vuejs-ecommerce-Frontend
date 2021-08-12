import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../components/user/app.vue'),
      children: [{
        path: '/home',
        component: () => import('../components/user/index.vue'),
        },
      ],
    },
    //user dashboard end
    //authentication part start
    {
      path:'/login',
      component: () => import('../components/auth/login.vue'),
    },
    //authentication part end here
    //admin dashboard start
    {
      path: '/admin/',
      component: () => import('../components/admin/app.vue'),
      children: [{
        path: 'dashboard',
        component: () => import('../components/admin/index.vue'),
        },

        {
          path: 'color',
          component: () => import('../components/admin/color/index.vue'),
        },
        {
          path: 'color/create',
          component: () => import('../components/admin/color/create.vue'),
        }//color section end

      ],
    },


  ]
})
