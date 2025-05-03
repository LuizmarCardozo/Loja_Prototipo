import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto/:id', component: ProdutoComponent },
  { path: 'login', component: LoginComponent }, // Rota para login
  { path: 'register', component: RegisterComponent }, // Rota para registro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}