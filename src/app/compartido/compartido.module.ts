import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ZapatosService } from '../zapatos/zapatos.service';



@NgModule({
  declarations: [EncabezadoComponent],
  imports: [
    CommonModule,RouterOutlet,HttpClientModule
  ],exports:[
    EncabezadoComponent
  ],providers:[
    ZapatosService, HttpClient,provideHttpClient()
  ]
})
export class CompartidoModule {  }
