import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListazapatoComponent } from './listazapato/listazapato.component';
import { ZapatosService } from './zapatos.service';
import { ContactoComponent } from './contacto/contacto.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscarZapatoComponent } from './buscar-zapato/buscar-zapato.component';




@NgModule({
  declarations: [ListazapatoComponent,ContactoComponent,BuscarZapatoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
    
    
    
    
  ],
  exports:[
    ListazapatoComponent,ContactoComponent,BuscarZapatoComponent
  ],
  providers:[
    ZapatosService, HttpClient,provideHttpClient()
  ]
})
export class ZapatosModule {  }
