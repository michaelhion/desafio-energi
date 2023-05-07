import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormContainerComponent } from '../form-container.component';

@Component({
  selector: 'app-form-container-dados-pessoais',
  templateUrl: './form-container-dados-pessoais.component.html',
  styleUrls: ['./form-container-dados-pessoais.component.css']
})
export class FormContainerDadosPessoaisComponent implements OnInit{
  form!: FormGroup;

  constructor(private formContainer: FormContainerComponent) {}

  ngOnInit() {
    this.form = this.formContainer.getDadosPessoaisForm();
  }
}
