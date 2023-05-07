import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormContainerComponent } from '../form-container.component';
import { CepService } from 'src/app/services/cep.service';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-form-container-endereco',
  templateUrl: './form-container-endereco.component.html',
  styleUrls: ['./form-container-endereco.component.css']
})
export class FormContainerEnderecoComponent implements OnInit,OnChanges{
  form!: FormGroup;
  endereco : Endereco = new Input;

  constructor(
    private formContainer: FormContainerComponent,
    private rota: Router,
    private cepService : CepService
    ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.preencheEndereco(this.endereco.cep)
  }

  ngOnInit() {
    this.form = this.formContainer.getEnderecoForm();
  }

  preencheEndereco(cep:string){
    this.cepService.buscaCep(cep).subscribe((data)=>{
    this.endereco.logradouro = data.logradouro;
    this.endereco.bairro = data.bairro;
    this.endereco.localidade = data.localidade;
    this.endereco.uf = data.uf;
    this.endereco.ddd = data.ddd;
    });    
    return this.endereco;
  }
}
