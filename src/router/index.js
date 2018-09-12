import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'


Vue.use(Router)

const router = new Router({
  routes
})
const LOGINED = true
router.beforeEach((to, from, next) => {
  if(to.name !== 'login'){
    if(LOGINED) next()
    else next({name: 'login'})
  }else{
    if(LOGINED) next({name: 'home'})
    else next()
  }
})

export default router
