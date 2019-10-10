import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';
import { PessoaCriarComponent } from './pessoa-criar/pessoa-criar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaUpdateComponent } from './pessoa-update/pessoa-update.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';



const routes: Routes = [
   { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
   { path: 'pessoas', component: PessoaListaComponent, canActivate: [AuthGuard]},
   { path: 'add', component: PessoaCriarComponent, canActivate: [AuthGuard] },
   { path: 'update/:id', component: PessoaUpdateComponent, canActivate: [AuthGuard] },
   { path: 'details/:id', component: PessoaDetalhesComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
