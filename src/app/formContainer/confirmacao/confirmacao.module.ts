import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacaoRoutingModule } from './confirmacao-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmacaoComponent } from './confirmacao.component';



@NgModule({
  declarations: [
    ConfirmacaoComponent
  ],
  imports: [
    CommonModule,
    ConfirmacaoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConfirmacaoModule { }
