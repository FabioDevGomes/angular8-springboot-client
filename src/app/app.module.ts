import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaCriarComponent } from './pessoa-criar/pessoa-criar.component';
import { FormsModule } from '@angular/forms';
import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';
import { PessoaUpdateComponent } from './pessoa-update/pessoa-update.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PessoaListaComponent,
    PessoaCriarComponent,
    PessoaDetalhesComponent,
    PessoaUpdateComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
