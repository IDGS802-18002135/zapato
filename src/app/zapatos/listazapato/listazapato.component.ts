import { Component } from '@angular/core';
import { IZapato } from '../interfaces/zapato';
import { ZapatosService } from '../zapatos.service';

@Component({
  selector: 'app-listazapato',
  
  templateUrl: './listazapato.component.html',
  styleUrl: './listazapato.component.css'
})
export class ListazapatoComponent {
  listaZapatos:IZapato[]=[];
  isResultLoaded=false;
  isUpdateFormActive = false;
  nombreTarea: string ="";
  IDTareaActual: number = 0;
  descripcionZapato:string="";
  precioZapato:number=0;
  imagenZapato:string="";
  constructor(private _zapatoService: ZapatosService ) 
  {
  this.obtenerZapatos();
  }
  obtenerZapatos()
  {
  this._zapatoService.getList().subscribe({
  next:(data) => {
  this.listaZapatos = data;
  this.isResultLoaded = true;
  }, error:(e) => {console.log(e)}
  });
  }
}
