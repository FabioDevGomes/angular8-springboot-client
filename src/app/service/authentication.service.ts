import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../model/usuario';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Usuario>;
    public currentUser: Observable<Usuario>;
    user1 : Usuario = new Usuario;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
        console.log("============AuthenticationService" + JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Usuario {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
      console.log("=========Tentar Login");

      this.user1.authdata = window.btoa(username + ':' + password);
      this.currentUserSubject = new BehaviorSubject<Usuario>(this.user1);
        return this.http.post<any>('http://localhost:8080/api/v1/validateLogin',  {
      headers: new HttpHeaders(
        {
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Methods': 'POST',
          'Content-Type': 'application/json',
          'Authorization': 'Basic '+btoa(username +":"+password),
          'Accept': '*/*',
        })})
            .pipe(map(user => {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.clear();
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log("=========Mesmo cod constructor");

                //this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
                //this.currentUser = this.currentUserSubject.asObservable();

                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
      console.log("============logout()");
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
