import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/iniLogin.vue'
import cEntidad from '../components/crearEntidad.vue'
import EntityList from "../components/listaEntidades.vue"
import eEntity from "../components/editarEntidad.vue"
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/cEntity',
    name: 'cEntidad',
    component: cEntidad
  },
  {
    path: '/eList',
    name: 'EntityList',
    component: EntityList
  },
  {
    path: '/eEntity:id',
    name: 'eEntity',
    component: eEntity
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
