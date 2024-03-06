import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { LogotipoCadComponent } from './logotipo-cad/logotipo-cad.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    LogotipoCadComponent,
    CadastroUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
