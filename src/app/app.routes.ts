import { RouterModule, Routes } from '@angular/router';
import { ListazapatoComponent } from './zapatos/listazapato/listazapato.component';
import { ContactoComponent } from './zapatos/contacto/contacto.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ZapatosModule } from './zapatos/zapatos.module';
import { BuscarZapatoComponent } from './zapatos/buscar-zapato/buscar-zapato.component';

export const routes: Routes = [
   {
      path:'inicio',component:ListazapatoComponent
   },
   {
      path:'contacto',component:ContactoComponent
   },
   {
      path:'buscar',component:BuscarZapatoComponent
   },
   { path: '', redirectTo: '/inicio', pathMatch: 'full' }

];




