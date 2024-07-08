import { Component } from '@angular/core';
import { ZapatosService } from '../zapatos.service';
import { IZapato } from '../interfaces/zapato';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscar-zapato',

  templateUrl: './buscar-zapato.component.html',
  styleUrl: './buscar-zapato.component.css'
})
export class BuscarZapatoComponent {
  listaZapatos:IZapato[]=[];
  buscarForm: FormGroup;
  isResultLoaded=false;
  isUpdateFormActive = false;
  nombreTarea: string ="";
  IDTareaActual: number = 0;
  descripcionZapato:string="";
  precioZapato:number=0;
  imagenZapato:string="";
  constructor(  private fb: FormBuilder,private _zapatoService: ZapatosService ) 
  {
    this.buscarForm = this.fb.group({
      palabraClave: ['']
    });
    this.obtenerZapatos();
  }
  buscarZapatos()
  {
    const query = this.buscarForm.get('palabraClave')?.value;
    console.log('Query:', query);
  this._zapatoService.searchList(query).subscribe({
  next:(data) => {
  this.listaZapatos = data;
  this.isResultLoaded = true;
  }, error:(e) => {console.log(e)}
  });
  }

  buscarZapatosDeportivo()
  {
    
  this._zapatoService.searchList("deportivo").subscribe({
  next:(data) => {
  this.listaZapatos = data;
  this.isResultLoaded = true;
  }, error:(e) => {console.log(e)}
  });
  }
  buscarZapatosCasual()
  {
    
  this._zapatoService.searchList("casual").subscribe({
  next:(data) => {
  this.listaZapatos = data;
  this.isResultLoaded = true;
  }, error:(e) => {console.log(e)}
  });
  }
  buscarZapatosMujer()
  {
    
  this._zapatoService.searchList("mujer").subscribe({
  next:(data) => {
  this.listaZapatos = data;
  this.isResultLoaded = true;
  }, error:(e) => {console.log(e)}
  });
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
