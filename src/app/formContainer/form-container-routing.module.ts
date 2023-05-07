import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from './form-container.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dadosPessoais',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FormContainerComponent,
    children: [
      {
        path: 'dadosPessoais',
        loadChildren: () =>
          import('./form-container-dados-pessoais/form-container-dados-pessoais.module').then(
            (module) => module.FormContainerDadosPessoaisModule
          ),
      },
      {
        path: 'endereco',
        loadChildren: () =>
          import('./form-container-endereco/form-container-endereco.module').then(
            (module) => module.FormContainerEnderecoModule
          ),
      },
      {
        path: 'confirmacao',
        loadChildren: () =>
          import('./confirmacao/confirmacao.module').then(
            (module) => module.ConfirmacaoModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormContainerRoutingModule { }
