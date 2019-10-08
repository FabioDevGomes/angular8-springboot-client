import { Component } from '@angular/core';
import { Usuario } from './model/usuario';
import { AuthenticationService } from './service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client Angular';
  currentUser: Usuario;
  teste: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      console.log('=========constructorApp'+ this.currentUser)
      this.teste = 'dd';
  }

  logout() {
      this.authenticationService.logout();
      this.teste = null;
      this.router.navigate(['/login']);
  }

  teste1(){
    console.log('=======///=====')
  }

}
