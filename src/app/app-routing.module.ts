import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProdutoComponent } from './view/produto/produto.component';

const routes: Routes = [
{path:'',component: HomeComponent},
{path:'produto/:id',component: ProdutoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
