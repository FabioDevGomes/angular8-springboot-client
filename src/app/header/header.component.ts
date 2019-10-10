import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  teste$: Observable<Usuario>;
  teste: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    debugger;
  }

  ngOnInit() {
    debugger;
      this.teste = 'logado';
  }

  logout() {
      this.teste = null;
      this.authenticationService.logout();
  }

}
