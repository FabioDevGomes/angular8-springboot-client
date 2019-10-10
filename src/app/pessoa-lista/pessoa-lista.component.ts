import { Observable } from "rxjs";
import { PessoaService } from "../pessoa.service";
import { Pessoa } from "../pessoa";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Usuario } from '../model/usuario';


@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {
  pessoas: Observable<Pessoa[]>;
  teste$: Observable<Usuario>;

  constructor(private pessoaService: PessoaService, private router: Router,
    private authenticationService: AuthenticationService) {
    this.teste$ = this.authenticationService.currentUser;

  }

  ngOnInit() {
     this.reloadData();
  }

  reloadData() {
    this.pessoas = this.pessoaService.getPessoasList();
  }

  deletePessoa(id: number) {
    this.pessoaService.deletePessoa(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  pessoaDetails(id: number){
    this.router.navigate(['details', id]);
  }

  pessoaUpdate(id: number){
    this.router.navigate(['update', id]);
  }

}
