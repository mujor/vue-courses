import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home,
    beforeEnter: (to ,from ,next) => {
      // if(from.name === 'about') alert('这是从About页进来的')
      // else alert('这不是从About页进来的')
      next()
      
    }
    // props: route => ({
    //   food: route.query.food
    // })
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      //food: 'banana'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import( '@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import( '@/views/child.vue'),
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import( '@/views/child.vue'),
      tel: () => import( '@/views/tel.vue'),
      email: () => import( '@/views/email.vue')
    }
  },
  {
    path: '/main',
    redirect: to =>{
      return {
        name: 'home'
      }
    }
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]