import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _463f86da = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _56ca6eac = () => interopDefault(import('..\\pages\\curiosities.vue' /* webpackChunkName: "pages/curiosities" */))
const _5a5e47e4 = () => interopDefault(import('..\\pages\\games.vue' /* webpackChunkName: "pages/games" */))
const _ef71d78c = () => interopDefault(import('..\\pages\\generalcuriosities.vue' /* webpackChunkName: "pages/generalcuriosities" */))
const _2f9f04b6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _60ad2d4a = () => interopDefault(import('..\\pages\\videos.vue' /* webpackChunkName: "pages/videos" */))
const _44bd7ace = () => interopDefault(import('..\\pages\\yourpet.vue' /* webpackChunkName: "pages/yourpet" */))
const _65f7619f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _463f86da,
    name: "about"
  }, {
    path: "/curiosities",
    component: _56ca6eac,
    name: "curiosities"
  }, {
    path: "/games",
    component: _5a5e47e4,
    name: "games"
  }, {
    path: "/generalcuriosities",
    component: _ef71d78c,
    name: "generalcuriosities"
  }, {
    path: "/login",
    component: _2f9f04b6,
    name: "login"
  }, {
    path: "/videos",
    component: _60ad2d4a,
    name: "videos"
  }, {
    path: "/yourpet",
    component: _44bd7ace,
    name: "yourpet"
  }, {
    path: "/",
    component: _65f7619f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
