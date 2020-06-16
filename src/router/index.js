import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login';
import ChatRoom from "../components/ChatRoom";

import { FirebaseAuth } from '../library/Database';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/chat',
      component: ChatRoom
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (!FirebaseAuth.currentUser && to.path !== '/') {
    next({
      path: '/'
    });
  } else if (FirebaseAuth.currentUser && to.path === '/') {
    next({
      path: '/chat'
    });
  } else {
    next();
  }
});

export default router;
