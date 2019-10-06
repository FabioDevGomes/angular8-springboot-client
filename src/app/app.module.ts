import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaCriarComponent } from './pessoa-criar/pessoa-criar.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';
import { PessoaUpdateComponent } from './pessoa-update/pessoa-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaListaComponent,
    PessoaCriarComponent,
    PessoaComponent,
    PessoaDetalhesComponent,
    PessoaUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
