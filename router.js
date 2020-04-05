import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '~/pages/index.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/:game',
        component: HomePage
      },
      {
        path: '*',
        redirect: '/single-elimination'
      }
    ]
  })
}