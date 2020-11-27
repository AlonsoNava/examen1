import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy{

  images = [
    {
      id:1,
      imagen:'../../../assets/img/project-1.jpg'
    },
    {
      id:2,
      imagen:'../../../assets/img/project-2.jpg'
    },
    {
      id:3,
      imagen:'../../../assets/img/project-3.jpg'
    },
    {
      id:4,
      imagen:'../../../assets/img/project-4.jpg'
    },
    {
      id:5,
      imagen:'../../../assets/img/project-5.jpg'
    }
  ];
  interval: any;
  aleatorio: any;
  constructor( private confi: NgbCarouselConfig) {
   confi.interval = 3000;
    
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      //cada 5 segundos elegimos una imagen al azar
     this.aleatorio= this.re();
    }, 500);
 }
  re() {
    const valor = Math.floor(Math.random()* (6)+1);
    return this.images[valor];
    
  }

  ok() {
    return this.aleatorio['imagen'];
  }
  ngOnDestroy() {
      console.log('destuyro');
      clearInterval(this.interval);
  }
}




