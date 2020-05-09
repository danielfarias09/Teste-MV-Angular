import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { Endereco } from '../../model/endereco';
import { EmpresaService } from '../../service/empresa.service'
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  public empresa: Empresa;
  public endereco: Endereco;
  public idEmpresa: number;
  public formulario: FormGroup;

  constructor(private api: EmpresaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.empresa = new Empresa();
    this.endereco = new Endereco();
    this.idEmpresa = Number(this.route.snapshot.paramMap.get('id'));

    if(this.idEmpresa != null){
      this.api.getEmpresa(this.idEmpresa).subscribe((empresa: Empresa) => {
        this.formulario.setValue({
          nome: empresa.nome,
          logradouro: empresa.endereco.logradouro,
          numero: empresa.endereco.numero,
          bairro: empresa.endereco.bairro,
          cep: empresa.endereco.cep,
          cidade: empresa.endereco.cidade
        })
     });
    }

    this.formulario = new FormGroup({
      nome: new FormControl('', Validators.required),
      logradouro: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required)
    });
  }

  salvarEmpresa(){
    debugger
    this.empresa = this.formulario.value;
    this.endereco.logradouro =  this.formulario.value.logradouro;
    this.endereco.numero = this.formulario.value.numero;
    this.endereco.bairro = this.formulario.value.bairro;
    this.endereco.cep = this.formulario.value.cep;
    this.endereco.cidade = this.formulario.value.cidade;

    this.empresa.endereco = this.endereco;
    this.empresa.id = this.idEmpresa;
    
    if(this.empresa.id){
      this.api.updateEmpresa(this.empresa).subscribe((response) => {
        this.router.navigate(['']);
      });
    }else{
      this.api.createEmpresa(this.empresa).subscribe((response) => {
        this.router.navigate(['']);
      });
    }
  }

}
