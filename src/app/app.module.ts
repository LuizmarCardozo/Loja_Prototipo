import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProdutoDetalheComponent } from './view/home/components/produto-detalhe/produto-detalhe.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProdutoComponent,
    BannerComponent,
    ProdutoDetalheComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
