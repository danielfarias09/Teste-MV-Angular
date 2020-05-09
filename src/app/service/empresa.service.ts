import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  static readonly BASE_URL = 'http://localhost:8080/estabelecimentos/';

  constructor(private http: HttpClient) {}

getEmpresas(nome) {
    return this.http.get(EmpresaService.BASE_URL, {params:{nome: nome}});
  }

createEmpresa(empresa){
  return  this.http.post(EmpresaService.BASE_URL, empresa);
 }

getEmpresa(id){
  return  this.http.get(EmpresaService.BASE_URL + id);
 }

 deleteEmpresa(id){
  return  this.http.delete(EmpresaService.BASE_URL + id);
 }

updateEmpresa(empresa){
  return  this.http.put(EmpresaService.BASE_URL + empresa.id, empresa);
}

}
