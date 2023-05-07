import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: 'form', loadChildren: () => 
  import('./formContainer/form-container.module').then(m => m.FormContainerModule) }, 
  
  { path: 'form', loadChildren: () => 
  import('./formContainer/form-container-dados-pessoais/form-container-dados-pessoais.module')
  .then(m => m.FormContainerDadosPessoaisModule) }, 
  
  { path: 'form', loadChildren: () => 
  import('./formContainer/form-container-endereco/form-container-endereco.module').
  then(m => m.FormContainerEnderecoModule) },
  
  { path: 'form', loadChildren: () => 
  import('./formContainer/confirmacao/confirmacao.module').
  then(m => m.ConfirmacaoModule) },
  
  {path:'listar', component:ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
