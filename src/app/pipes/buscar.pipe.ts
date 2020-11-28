import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(name: any, ...args: any): any {
    const resultadoBusqueda = [];
    for (const nombre of name ) {
      if ( nombre.name.toLowerCase().indexOf(args) > -1 || nombre.name.toUpperCase().indexOf(args) > -1 || nombre.name.indexOf(args) > -1) {
        resultadoBusqueda.push(nombre);
      } 
    }
    return resultadoBusqueda;
  }

}
