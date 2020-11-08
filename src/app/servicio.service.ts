import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colaboradores } from './modelos/colaboradores.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public urlApi:string=environment.Url

  constructor(public http:HttpClient) { }


  public obtenerDatos():Observable<Colaboradores>{
    return this.http.get<Colaboradores>(this.urlApi)
  }

  /*public getIdData(id:string):Observable<Colaboradores>{
    return this.http.get<Colaboradores>(`${this.urlApi}/${id}`)
  }*/

  public editarDatos(cuerpo:any,id:string):Observable<any>{
    return this.http.put(`${this.urlApi}/${id}`,cuerpo  )
  }

  public crearDatos(cuerpo:any):Observable<any>{
    return this.http.post(this.urlApi,cuerpo)
  }

  public eliminarDatos(id:string):Observable<any>{
    return this.http.delete(`${this.urlApi}/${id}`)
  }
}
