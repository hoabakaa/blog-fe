import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from './register-payload';
import { map, Observable } from 'rxjs';
import { ILogin } from './login-payload';
import { JwtAuthResponse } from './jwt-auth-response';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8080/api/auth/';

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }

  login(body: ILogin): Observable<any> {
    return this.httpClient
      .post<JwtAuthResponse>(this.url + 'login', body)
      .pipe(
        map((data) => {
          this.localStorageService.store('token', data.token);
          this.localStorageService.store('username', data.username);
          return true;
        })
      );
  }

  isAuthenticated(): Boolean {
    return this.localStorageService.retrieve('username') != null;
  }

  logout() {
    this.localStorageService.clear('token');
    this.localStorageService.clear('username');
  }
}
