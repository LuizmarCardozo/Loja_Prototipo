import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { AllstarVermelhoComponent } from './allstar-vermelho/allstar-vermelho.component';
import { AllstarAzulComponent } from './allstar-azul/allstar-azul.component';
import { AllstarPretoComponent } from './allstar-preto/allstar-preto.component';
import { AllstarBrancoComponent } from './allstar-branco/allstar-branco.component';

const routes: Routes = [
{path:'',component: HomeComponent},
{ path: 'allstar-vermelho', component: AllstarVermelhoComponent},
  { path: 'allstar-azul', component: AllstarAzulComponent},
  { path: 'allstar-preto', component: AllstarPretoComponent},
  { path: 'allstar-branco', component: AllstarBrancoComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
