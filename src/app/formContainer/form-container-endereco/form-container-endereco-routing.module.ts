import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerEnderecoComponent } from './form-container-endereco.component';

const routes: Routes = [{ path: '', component: FormContainerEnderecoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormContainerEnderecoRoutingModule { }
