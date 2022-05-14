import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from './components/HomeComponent'
import PageNotFound from './components/PageNotFound'
import ParentComponent from './components/shared/ParentComponent'
import VehiclesComponent from './components/vehicle/VehiclesComponent'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeComponent},
  { path: '/inicio', component: HomeComponent},
  { path: '/comunicacionComponentes', component: ParentComponent },
  { path: '/consumoAPI', component: VehiclesComponent },
  { path: '**', component: PageNotFound } 
]

const router = new VueRouter({
  routes
});

export default router;