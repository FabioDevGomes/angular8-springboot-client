import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  controleHeader: string;

  constructor(private authenticationService: AuthenticationService) {
    debugger;
  }

  ngOnInit() {
    debugger;
      this.controleHeader = 'logado';
  }

  logout() {
      this.controleHeader = null;
      this.authenticationService.logout();
  }

}
