import { ProfissionalService } from './../../service/profissional.service';
import { Profissional } from './../../model/profissional';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listar-profissional',
  templateUrl: './listar-profissional.component.html',
  styleUrls: ['./listar-profissional.component.css']
})
export class ListarProfissionalComponent implements OnInit {
  private nome: string;
  private endereco: string;
  private profissionais: Array<Profissional>;
  
  private colunas: string[] = ['nome', 'cidade', 'acoes'];

  constructor(private api: ProfissionalService, private router: Router) { }

  ngOnInit() {
    this.nome = "";
    this.endereco= "";
    this.profissionais = new Array<Profissional>();
  	this.getProfissionais();
  }

  public getProfissionais(){
    debugger
    this.api.getProfissionais(this.nome).subscribe((data:  Array<Profissional>) => {
        this.profissionais  =  data;
    });
  }

  public excluirProfissional(i,profissional){
    this.api.deleteProfissional(profissional.id).subscribe(() => {
      this.profissionais.splice(i,1);
	    this.profissionais = this.profissionais.slice();
    });
  }

}
