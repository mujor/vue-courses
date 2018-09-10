import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/argu',
    name: 'argu',
    component: () => import( '@/views/argu.vue'),
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
  }
]