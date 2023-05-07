import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormContainerDadosPessoaisRoutingModule } from './form-container-dados-pessoais-routing.module';
import { FormContainerDadosPessoaisComponent } from './form-container-dados-pessoais.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormContainerDadosPessoaisComponent
  ],
  imports: [
    CommonModule,
    FormContainerDadosPessoaisRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormContainerDadosPessoaisModule { }
