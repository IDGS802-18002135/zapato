import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IZapato } from './interfaces/zapato';

@Injectable({
  providedIn: 'root'
})
export class ZapatosService {

  private _endpoint: string = environment.endPoint;
  private _apiURL: string = this._endpoint + "Zapatos/"
  constructor(private http: HttpClient) {}
  
  getList(): Observable<IZapato[]>{
   
    return this.http.get<IZapato[]>(`${this._apiURL}ListaZapatos`)
  }

  searchList(palabraClave: string): Observable<IZapato[]>{
    let params = new HttpParams().set('palabraClave', palabraClave);
    return this.http.get<IZapato[]>(`${this._apiURL}BuscarZapatos`,{params})
  }

}
