import { EmpresaService } from './../../service/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../model/endereco';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Profissional } from 'src/app/model/profissional';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { Empresa } from 'src/app/model/empresa';


@Component({
  selector: 'app-cadastrar-profissional',
  templateUrl: './cadastrar-profissional.component.html',
  styleUrls: ['./cadastrar-profissional.component.css']
})
export class CadastrarProfissionalComponent implements OnInit {

  public profissional: Profissional;
  public endereco: Endereco;
  public idProfissional: number;
  public formulario: FormGroup;
  public empresas: Array<Empresa> =  new Array<Empresa>();
  public empresaSelecionada: Empresa = new Empresa();
  public idEmpresaSelecionada: number;

  constructor(private api: ProfissionalService, private empresaService: EmpresaService, 
    private router: Router,private route: ActivatedRoute) { }

    ngOnInit() {
      this.profissional = new Profissional();
      this.endereco = new Endereco();
      this.idProfissional = Number(this.route.snapshot.paramMap.get('id'));

      this.getEmpresas();
  
      if(this.idProfissional != null){
        this.api.getProfissional(this.idProfissional).subscribe((profissional: Profissional) => {
          this.formulario.setValue({
            nome: profissional.nome,
            logradouro: profissional.endereco.logradouro,
            numero: profissional.endereco.numero,
            bairro: profissional.endereco.bairro,
            cep: profissional.endereco.cep,
            cidade: profissional.endereco.cidade,
            estabelecimento: profissional.estabelecimento.id
          })
       });
      }
  
      this.formulario = new FormGroup({
        nome: new FormControl('', Validators.required),
        logradouro: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        bairro: new FormControl('', Validators.required),
        cep: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        estabelecimento: new FormControl('', Validators.required)
      });
    }

    private getEmpresas(){
      this.empresaService.getEmpresas('').subscribe((data:  Array<Empresa>) => {
          this.empresas  =  data;
      });
    }


    public selectEmpresa(id) {
      this. empresaSelecionada = this.empresas.find((empresa)=> empresa.id == id);
      debugger
    }

    salvarProfissional(){
      debugger
      this.profissional = this.formulario.value;
      this.endereco.logradouro =  this.formulario.value.logradouro;
      this.endereco.numero = this.formulario.value.numero;
      this.endereco.bairro = this.formulario.value.bairro;
      this.endereco.cep = this.formulario.value.cep;
      this.endereco.cidade = this.formulario.value.cidade;
  
      this.profissional.endereco = this.endereco;
      this.profissional.estabelecimento = this.empresaSelecionada;
      this.profissional.id = this.idProfissional;
      
      if(this.profissional.id){
        this.api.updateProfissional(this.profissional).subscribe((response) => {
          this.router.navigate(['/listar-profissional']);
        });
      }else{
        this.api.createProfissional(this.profissional).subscribe((response) => {
          this.router.navigate(['/listar-profissional']);
        });
      }
    }

}
