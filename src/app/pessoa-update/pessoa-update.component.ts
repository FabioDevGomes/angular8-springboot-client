import { Component, OnInit } from '@angular/core';
import { Pessoa } from "../pessoa";
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from "../pessoa.service";



@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.css']
})
export class PessoaUpdateComponent implements OnInit {

  id: number;
  pessoa: Pessoa;

  constructor(private route: ActivatedRoute, private pessoaService: PessoaService, private router: Router) { }

  ngOnInit() {
    this.pessoa = new Pessoa();

    this.id = this.route.snapshot.params['id'];

    this.pessoaService.getPessoa(this.id)
       .subscribe(data => {
         console.log(data)
         this.pessoa = data;
    }, error => console.log(error));
  }

  updatePessoa() {
    this.pessoaService.updatePessoa(this.id, this.pessoa)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pessoa = new Pessoa();
    this.gotoList();
  }

  onSubmit() {
    this.updatePessoa();
  }

  gotoList() {
    this.router.navigate(['/pessoas']);
  }

}
