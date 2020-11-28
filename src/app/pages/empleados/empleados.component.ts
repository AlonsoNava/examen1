import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/interfaces/empleados.interfaces';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent  {

  forma: FormGroup;
  
  emple: any = {};

  empleados: any = {};
  filtrarNombre: any = '';
  p: number = 1;

  constructor(private fb:FormBuilder, public empleado:EmpleadosService) { 
    this.cargar_empleadosg();
    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      last_name: ['', Validators.required, Validators.maxLength(30)], 
    })
  }

  cargar_empleadosg() {
    this.empleado.cargar_empleados()
    .subscribe( (dataEmpleados: any) => {
      this.empleados = dataEmpleados.data.employees;
      console.log(this.empleados);
    });
  }

  guardar( ) {
    this.empleado.altaEmpleado(this.emple)
    .subscribe( resp => {
      console.log(resp);
      this.emple = resp;
      this.cargar_empleadosg();
    });
  }
}
