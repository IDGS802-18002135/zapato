import { Component } from '@angular/core';
import { RouteConfigLoadStart, RouterOutlet } from '@angular/router';
import { ZapatosModule } from './zapatos/zapatos.module';
import { EncabezadoComponent } from './compartido/encabezado/encabezado.component';
import { CompartidoModule } from './compartido/compartido.module';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     
    ZapatosModule,
    CompartidoModule,RouterOutlet,JsonPipe],
  
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'ZapatoApp';
  constructor(private http: HttpClient) { }
}
