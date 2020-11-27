import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path:'inicio', component:InicioComponent, canActivate:[AuthGuard] },
  { path:'empleados', component:EmpleadosComponent, canActivate:[AuthGuard] },
  { path:'grupos', component:GruposComponent, canActivate:[AuthGuard] },
  { path: '', component:InicioComponent },
  { path:'**', redirectTo:'/inicio', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
