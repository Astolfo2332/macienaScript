import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/iniLogin.vue'
import cEntidad from '../components/crearEntidad.vue'
import EntityList from "../components/listaEntidades.vue"
import eEntity from "../components/editarEntidad.vue"
import cUsers from "../components/crearUsuario.vue"
import usersList from "../components/listaUsuarios.vue"
import eUsers from "../components/editarUsuarios.vue"
import usersXEntity from "../components/listaUsuariosxEntidad.vue"
import servicesList from "../components/listaServicios.vue"
import servicesxEntity from "../components/listaServiciosxEntidad.vue"
import cStandard from "../components/crearEstandar.vue"
import lStandard from "../components/listarEstandares.vue"
import eStandard from "../components/editarEstandares.vue"
import StandardxService from "../components/listarEstandaresXServicio.vue"
import cCriteria from "../components/crearCriterio.vue"
import cService from "../components/crearServicio.vue"
import eService from "../components/editarServicio.vue"

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
    path: '/cUser',
    name: 'cUser',
    component: cUsers
  },
  {
    path: '/lUsers',
    name: 'lUsers',
    component: usersList
  },
  {
    path: '/eUsers:id',
    name: 'editUsers',
    component: eUsers
  },
  {
    path: '/usersxentity',
    name: 'usersxentity',
    component: usersXEntity
  },
  {
    path: '/servicesList',
    name: 'servicesList',
    component: servicesList
  },
  {
    path: '/servicesxEntity',
    name: 'servicesxEntity',
    component: servicesxEntity
  },
  {
    path: '/lStandard',
    name: 'lStandard',
    component: lStandard
  },
  {
    path: '/eStandard:id',
    name: 'editStandard',
    component: eStandard
  },
  {
    path: '/cStandard',
    name: 'cStandard',
    component: cStandard
  },
  {
    path: '/StandardxService',
    name: 'StandardxService',
    component: StandardxService
  },
  {
    path: '/cCriteria',
    name: 'cCriteria',
    component: cCriteria
  },
  {
    path: '/cService',
    name: 'cservicio',
    component: cService
  },
  {
    path: '/eService:id',
    name: 'editServices',
    component: eService
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
