import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpleadosService } from './empleados.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private empleado:EmpleadosService, private route:Router) {
    
  }

  canActivate() {
    if(this.empleado.cargar_grupos()){
      return true;
    } else{
      this.route.navigate(['/inicio']);
      return false;
    }
  }

  
}
