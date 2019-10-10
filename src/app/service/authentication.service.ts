import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Usuario>;
    public currentUser: Observable<Usuario>;
    user1 : Usuario = new Usuario;
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
        console.log("============cont.AuthenticationService " + JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Usuario {
        return this.currentUserSubject.value;
    }

    get isLoggedIn() {
      return this.loggedIn.asObservable();
    }

    login(username: string, password: string) {
      this.user1.authdata = window.btoa(username + ':' + password);
      this.currentUserSubject = new BehaviorSubject<Usuario>(this.user1);
        return this.http.post<any>('http://localhost:8080/api/v1/validateLogin',  {
      headers: new HttpHeaders(
        {
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Content-Type': 'application/json',
          'Authorization': 'Basic '+btoa(username +":"+password),
          'Accept': '*/*',
        })})
            .pipe(map(user => {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                this.loggedIn.next(true);

                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}
