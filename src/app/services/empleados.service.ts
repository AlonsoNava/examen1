import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleados.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(public http: HttpClient) {

  }
  cargar_empleados() {
    return this.http.get('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/alonso');
  }

  altaEmpleado(emplea: Empleado) {
    return this.http.post('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/alonso', emplea)
    .pipe(
      map( (resp: any) => {
        emplea['id'] = resp.name;
        return emplea;
      })
    )
  }
  cargar_grupos() {
    return this.http.get(`https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/alonso/getByGroup?id=2`);
  }
}
