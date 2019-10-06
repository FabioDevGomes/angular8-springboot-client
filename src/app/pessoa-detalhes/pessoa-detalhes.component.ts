import { Pessoa } from '../pessoa';
import { Component, OnInit, Input } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { PessoaListaComponent } from '../pessoa-lista/pessoa-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-detalhes',
  templateUrl: './pessoa-detalhes.component.html',
  styleUrls: ['./pessoa-detalhes.component.css']
})
export class PessoaDetalhesComponent implements OnInit {

  id: number;
  pessoa: Pessoa;

  constructor(private route: ActivatedRoute,private router: Router,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.id = this.route.snapshot.params['id'];
    this.pessoaService.getPessoa(this.id)
      .subscribe(data => {
        console.log(data)
        this.pessoa = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['pessoas']);
  }
}
