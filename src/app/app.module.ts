import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//npm
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { HeaderComponent } from './pages/header/header.component';
import { BuscarPipe } from './pipes/buscar.pipe';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EmpleadosComponent,
    GruposComponent,
    HeaderComponent,
    BuscarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    NgxPaginationModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
