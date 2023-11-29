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
import lCritxServ from "../components/listaCriteriosxservicio.vue"
import lCritxStan from "../components/listaCriteriosxestandar.vue"
import lCritxStanxServ from "../components/listaCriteriosxestandarxservice.vue"
import eCriteria from "../components/editarCriterio.vue"
import homeini from "../components/homeIni.vue"
import crearArchivo from "../components/crearArchivo.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: homeini
    , meta:{userType:4,requireAuth:false}
  },
  {
    path: '/crearArchivo:id',
    name: 'crearArchivo',
    component: crearArchivo
    , meta:{userType:4,requireAuth:true}
  },
{
    path: '/login',
    name: 'login',
    component: Login
    , meta:{userType:4,requireAuth:false}
  },
  {
    path: '/cEntity',
    name: 'cEntidad',
    component: cEntidad
    , meta:{userType:2,requireAuth:true}
  },
  {
    path: '/eList',
    name: 'EntityList',
    component: EntityList
    , meta:{userType:2,requireAuth:true}
  },
  {
    path: '/eEntity:id',
    name: 'eEntity',
    component: eEntity
    , meta:{userType:2,requireAuth:true}
  },
  {
    path: '/eCriteria:id',
    name: 'eCriteria',
    component: eCriteria
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/cUser',
    name: 'cUser',
    component: cUsers
    , meta:{userType:3,requireAuth:true}
  },
  {
    path: '/lUsers',
    name: 'lUsers',
    component: usersList
    , meta:{userType:3,requireAuth:true}
  },
  {
    path: '/eUsers:id',
    name: 'editUsers',
    component: eUsers
    , meta:{userType:3,requireAuth:true}
  },
  {
    path: '/usersxentity',
    name: 'usersxentity',
    component: usersXEntity
    , meta:{userType:3,requireAuth:true}
  },
  {
    path: '/servicesList',
    name: 'servicesList',
    component: servicesList
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/servicesxEntity',
    name: 'servicesxEntity',
    component: servicesxEntity
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/lStandard',
    name: 'lStandard',
    component: lStandard
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/eStandard:id',
    name: 'editStandard',
    component: eStandard
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/cStandard',
    name: 'cStandard',
    component: cStandard
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/StandardxService',
    name: 'StandardxService',
    component: StandardxService
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/cCriteria',
    name: 'cCriteria',
    component: cCriteria
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/cService',
    name: 'cservicio',
    component: cService
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/eService:id',
    name: 'editServices',
    component: eService
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/lCxs',
    name: 'listCritxServices',
    component: lCritxServ
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/lCxStan',
    name: 'listCritxStandard',
    component: lCritxStan
    , meta:{userType:4,requireAuth:true}
  },
  {
    path: '/lCxStanxServ:id',
    name: 'listCritxStandardxStan',
    component: lCritxStanxServ
    , meta:{userType:4,requireAuth:true}
  }
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
    const auth="true"==localStorage.getItem("auth") 
    const rtUser=to.meta.userType
    const rAuth=to.meta.requireAuth
    const tUser=localStorage.getItem("userType")
    if (!auth&&rAuth){
        alert("Inicie sesión primero")
        next("/login")
    }
    else{
        if (rtUser>=tUser){
            next() 
            console.log("req",rtUser)
            console.log("type",tUser)
        }
        else{
            console.log("req",rtUser)
            console.log("type",tUser)
            alert("Permisos no validos")
            next("/")
        }
    }
})

export default router
