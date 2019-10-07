import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';
import { PessoaCriarComponent } from './pessoa-criar/pessoa-criar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaUpdateComponent } from './pessoa-update/pessoa-update.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
   { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
   { path: 'pessoas', component: PessoaListaComponent, canActivate: [AuthGuard]},
   { path: 'add', component: PessoaCriarComponent },
   { path: 'update/:id', component: PessoaUpdateComponent },
   { path: 'details/:id', component: PessoaDetalhesComponent },
   { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
