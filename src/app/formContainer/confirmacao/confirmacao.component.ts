import { Component, Input, OnInit } from '@angular/core';
import { FormContainerComponent } from '../form-container.component';
import { FormGroup } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit{
  pessoa:Pessoa =new Input;
  pessoas: Pessoa[]= [];

  constructor(
    private rota: Router,
    private cepService : CepService,
    private localService:LocalStorageService
  ){}

  ngOnInit(): void {
    let json = this.localService.get('multi-step-form');
    this.pessoa = JSON.parse(json);
    let pessoaList = JSON.parse(this.localService.get('pessoaSalva'));
    pessoaList.forEach((element:Pessoa) => {
      this.pessoas.push(element);
    });
    console.log(this.pessoas);
    
     
  }

  submit() { 
    this.pessoas.push(this.pessoa);
    localStorage.setItem('pessoaSalva',JSON.stringify(this.pessoas))
    localStorage.removeItem('multi-step-form')
    this.rota.navigate(['listar'])
  }

  preencheEndereco(cep:string){
    this.cepService.buscaCep(cep).subscribe((data)=>{
    this.pessoa.endereco.logradouro = data.logradouro;
    this.pessoa.endereco.bairro = data.bairro;
    this.pessoa.endereco.localidade = data.localidade;
    this.pessoa.endereco.uf = data.uf;
    this.pessoa.endereco.ddd = data.ddd;
    });    
    return this.pessoa;
  }
}
