import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ActivatedRoute } from '@angular/router';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {


  @Input() grupito: any[] = [];
  @Output() empleadoSel: EventEmitter<any>;
  
  cod:string = undefined;
  filtrarNombre: any = '';
  grupo: any = {};
  done = [
    
  ];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        console.log(this.grupito);
    }
  }
  
  constructor(public grupos: EmpleadosService, private route: ActivatedRoute) {
    this.cargar_group();
    this.empleadoSel = new EventEmitter();
  }
  cargar_group() {
    this.grupos.cargar_grupos().subscribe( (resp:any) =>{
      this.grupito = resp.data.employees;
      console.log(this.grupito);
    })
  }
  imprimir() {
    this.empleadoSel.emit(this.grupito);
    console.log(this.empleadoSel.emit(this.grupito));
  }

  ngOnInit(): void {
  }

}
