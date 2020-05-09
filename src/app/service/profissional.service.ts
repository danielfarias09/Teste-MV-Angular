import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  static readonly BASE_URL = 'http://localhost:8080/profissionais/';

  constructor(private http: HttpClient) {}

  getProfissionais(nome) {
    return this.http.get(ProfissionalService.BASE_URL, {params:{nome: nome}});
  }

createProfissional(profissional){
  return  this.http.post(ProfissionalService.BASE_URL, profissional);
 }

getProfissional(id){
  return  this.http.get(ProfissionalService.BASE_URL + id);
 }

 deleteProfissional(id){
  return  this.http.delete(ProfissionalService.BASE_URL + id);
 }

updateProfissional(profissional){
  return  this.http.put(ProfissionalService.BASE_URL + profissional.id, profissional);
}
}
