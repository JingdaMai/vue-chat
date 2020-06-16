import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login';

import { FirebaseAuth } from '@/library/Database';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (!FirebaseAuth.currentUser && to.path !== '/') {
    next({
      path: '/'
    })
  } else {
    next();
  }
});

export default router;
