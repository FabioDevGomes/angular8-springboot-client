import { Component } from '@angular/core';
import { Usuario } from './model/usuario';
import { AuthenticationService } from './service/authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client Angular';
  currentUser: Usuario;
  teste: string;
  public mostrarMenu = false;


  constructor(private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
       this.teste = 'logadoo';
  }

}
