import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerDadosPessoaisComponent } from './form-container-dados-pessoais.component';

const routes: Routes = [{ path: '', component: FormContainerDadosPessoaisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormContainerDadosPessoaisRoutingModule { }
