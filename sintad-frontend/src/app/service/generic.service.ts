import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {

  constructor(
    protected http: HttpClient,
    @Inject("url") protected url: string
  ) { }

  findAll(){
    return this.http.get<T[]>(`${this.url}/listar`);
  }

  findById(id: number){
    return this.http.get<T>(`${this.url}/buscar/${id}`)
  }

  save(t: T){
    return this.http.post(`${this.url}/registrar`, t);
  }

  update(t: T){
    return this.http.put(`${this.url}/modificar`, t);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/eliminar/${id}`)
  }
}
