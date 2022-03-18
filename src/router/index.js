import Vue       from 'vue'
import VueRouter from 'vue-router'
import store     from '@/store'
// import Login                      from '@/components/login/Login'
// import PrepareProfile             from '@/components/login/PrepareProfile'
// import AppWrapper                 from '@/components/wrapper/AppWrapperComponent'
// import BandejaGestiones           from '@/components/gestiones/bandeja/BandejaGestiones'
// import Operacion                  from '@/views/administracion/operacion'
// import ErrorPage                  from '@/views/error/errorPage'
// import Publicidad                 from '@/views/publicidad/publicidad'
// import AltaGestiones              from '@/views/gestiones/AltaGestiones'
// import ConsultaGestiones          from '@/views/gestiones/bandeja/ConsultaGestiones'
// import BalanceoEntreTerritorios   from '@/views/administracion/balanceos/territorio/BalanceoEntreTerritorios'
// import AltaGestores               from '@/views/despachos/altaGestores/AltaGestoresView'
// import MantenimientoUsuarios      from '@/views/mant-usuarios/MantenimientoUsuarios'
// import AltaClientesCyber          from '@/views/cyber/ClientesCyber'
// import AltaDespachos              from '@/views/despachos/altaDespachos/AltaDespachosView'
// import AltaSolicitudDespachos     from '@/views/despachos/altaDespachos/AltaDespachoSolicitudView'
// import RankingCobranza            from '@/views/reportes/RankingCobranzaView'
// import DescargaCarteraDespachos   from '@/views/despachos/descargaCarteraDespachos/DescargaCarteraView'
// import CargaDeGestiones           from '@/views/gestiones/carga-masiva'
// import EstadoCuentaOperativo      from '@/views/cartera/EstadoCuentaOpView'
// import HistorialCliente           from '@/views/cartera/HistorialClienteView'
// import EstadoCuentaClienteUnico   from '@/views/cartera/EstadoCuentaCUView'
// import BitacoraGestiones          from '@/views/gestiones/bitacora'
// import AsignacionXSegmento        from '@/views/administracion/asignacion/AsignacionCarteraPorSegmento'
// import QueryResult                from '@/components/administracion/operacion/Resultado'
// import MantUsuarioUView           from '@/views/cartera/MantUsuarioUView'
import Productos                  from '@/components/productos/productos'
Vue.use(VueRouter)


const routes = [
  // { path: '/login',           name: 'Login',          component: Login},
  // { path: '/prepareProfile',  name: 'PrepareProfile', component: PrepareProfile},
  { path: '/',        name: 'Productos' ,     component: Productos},
  // {
  //   path: '/',
  //   name: 'wrapper',
  //   component: AppWrapper,
  //   meta:{requiresAuth: true},
  //   children:[
  //       { path: 'inicio',                    name: 'publicidad',                 component: Publicidad,                  meta:{requiresAuth: true}},
  //       { path: 'queries',                   name: 'Queries',                    component: Operacion ,                  meta:{requiresAuth: true}},
  //       { path: 'alta-gestiones',            name: 'AltaDeGestiones',            component: AltaGestiones ,              meta:{requiresAuth: true}},
  //       { path: 'consulta-gestiones',        name: 'ConsultaGestiones',          component: ConsultaGestiones ,          meta:{requiresAuth: true}},       
  //       { path: 'bandeja-gestiones',         name: 'BandejaGestiones',           component: BandejaGestiones ,           meta:{requiresAuth: true}},
  //       { path: 'balanceo-entre-territorio', name: 'BalanceoEntreTerritorios',   component: BalanceoEntreTerritorios ,   meta:{requiresAuth: true}},
  //       { path: 'alta-gestores',             name: 'AltaDeGestores',             component: AltaGestores ,               meta:{requiresAuth: true}},        
  //       { path: 'mant-usuarios',             name: 'MantUsuarios',               component: MantenimientoUsuarios ,      meta:{requiresAuth: true}},
  //       { path: 'alta-clientes-cyber',       name: 'AltaClientesCyber',          component: AltaClientesCyber ,          meta:{requiresAuth: true}},
  //       { path: 'error-path',                name: 'errorPath',                  component: ErrorPage ,                  meta:{requiresAuth: true}},
  //       { path: 'ranking-cobranza',          name: 'RankingCobranza',            component: RankingCobranza,             meta:{requiresAuth: true}},
  //       { path: 'alta-despachos',            name: 'AltaDespachos',              component: AltaDespachos,               meta:{requiresAuth: true}},
  //       { path: 'solicitud-despachos',       name: 'SolicitudDespachos',         component: AltaSolicitudDespachos,      meta:{requiresAuth: true}},
  //       { path: 'descarga-cartera-despachos',name: 'DescargaCarteraDespachos',   component: DescargaCarteraDespachos,    meta:{requiresAuth: true}},        
  //       { path: 'carga-masiva-gestiones',    name: 'CargaDeGestiones',           component: CargaDeGestiones,            meta:{requiresAuth: true}},
  //       { path: 'estado-cuenta-cu',          name: 'EstadoCuentaClienteUnico',   component: EstadoCuentaClienteUnico,    meta:{requiresAuth: true}},
  //       { path: 'estado-cuenta-op',          name: 'EstadoCuentaOperativo',      component: EstadoCuentaOperativo,       meta:{requiresAuth: true}},
  //       { path: 'historial-cliente',         name: 'HistorialCliente',           component: HistorialCliente,            meta:{requiresAuth: true}},
  //       { path: 'bitacora-gestiones',        name: 'BitacoraGestiones',          component: BitacoraGestiones,           meta:{requiresAuth: true}},
  //       { path: 'asignacion-por-segmento',   name: 'AsignacionXSegmento',        component: AsignacionXSegmento,         meta:{requiresAuth: true}},
  //       { path: 'query-result',              name: 'QueryResult',                component: QueryResult,                 meta:{requiresAuth: true}},
  //       { path: '/blank-page',               name: 'BlankPage',                  component: ErrorPage,                   meta:{requiresAuth: true}},
  //       { path: 'mant-usuario-unificado',    name: 'MantUsuarioUnificado',       component: MantUsuarioUView,       meta:{requiresAuth: true} },  
  //       // { path: 'productos',                  name: 'Productos' ,                component: Productos,  meta:{requiresAuth: true}},
  //   ]
  // },  
  
  /**Cualquier otro */
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const permitedPages = [
  '/',
  // '/login',
  // '/prepareProfile',
  // '/inicio',
  // '/queries',
  // '/alta-gestiones',
  // '/consulta-gestiones',  
  // '/bandeja-gestiones',
  // '/balanceo-entre-territorio',
  // '/alta-gestores',
  // '/mant-usuarios',
  // '/alta-clientes-cyber',
  // '/error-path',
  // '/ranking-cobranza', 
  // '/alta-despachos',
  // '/solicitud-despachos',
  // '/descarga-cartera-despachos',
  // '/carga-masiva-gestiones',
  // '/estado-cuenta-cu', 
  // '/estado-cuenta-op',
  // '/historial-cliente',
  // '/bitacora-gestiones',
  // '/asignacion-por-segmento',
  // '/blank-page',
  // '/query-result',
  // '/mant-usuario-unificado'
]
///D E S A R R O L L O/
router.beforeEach((to, from, next) => {  
  if(permitedPages.includes(to.path) ){
    return  next();
  }else{
    next({name:'Productos'});
  }
})

/* P R O D U C C I O N**/
/*const permitedPages = ['/login','/prepareProfile',]
router.beforeEach(async (to, from, next) => { 
  if(to.matched.some(record => record.meta.requiresAuth)) {    
      await router.app.$store.dispatch('login/validateToken')
      let isValidToken = await store.getters['login/isValidToken']

      if( isValidToken ){    
        next()
      }else{
        next({name:'Login'})
      }
  }else{
    if(permitedPages.includes(to.path)){
      next()
    }else{
      next({name:'Login'})
    }
  }
})*/

export default router
