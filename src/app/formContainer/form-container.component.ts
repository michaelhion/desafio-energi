import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {
  
  form!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dadosPessoais: this.formBuilder.group({
        nome: '',
        email: '',
        telefone: '',
      }),
      endereco: this.formBuilder.group({
        cep: '',
        logradouro: '',
        localidade: '',
        bairro: '',
        uf: '',
        ddd: '',
      }),
      pessoa:this.formBuilder.group({
        nome: '',
        email: '',
        telefone: '',
        cep: '',
        logradouro: '',
        localidade: '',
        bairro: '',
        uf: '',
        ddd: '',
      }),
    });
  }

  getDadosPessoaisForm(): FormGroup {
    return this.form.get('dadosPessoais') as FormGroup;
  }

  getEnderecoForm(): FormGroup {
    return this.form.get('endereco') as FormGroup;
  }

  getAllForms():FormGroup{
    return this.form.get('pessoa')  as FormGroup;
  }

}
