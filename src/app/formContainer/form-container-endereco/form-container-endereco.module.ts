import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormContainerEnderecoRoutingModule } from './form-container-endereco-routing.module';
import { FormContainerEnderecoComponent } from './form-container-endereco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormContainerEnderecoComponent
  ],
  imports: [
    CommonModule,
    FormContainerEnderecoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormContainerEnderecoModule { }
