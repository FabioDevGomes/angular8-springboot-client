import { PessoaDetailsComponent } from './pessoa-detalhes/pessoa-detalhes.component';
import { CreatePessoaComponent } from './pessoa-criar/pessoa-criar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa-lista/pessoa-lista.component';
import { UpdatePessoaComponent } from './pessoa-update/pessoa-update.component';


const routes: Routes = [
   { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
   { path: 'pessoas', component: PessoaListComponent },
   { path: 'add', component: CreatePessoaComponent },
   { path: 'update/:id', component: UpdatePessoaComponent },
   { path: 'details/:id', component: PessoaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
