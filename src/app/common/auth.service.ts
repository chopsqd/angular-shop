import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(User: Object) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, User).pipe(
      tap(this.setToken)
    )
  }

  logout() {
    this.setToken(null)
  }

  isAuth() {
    return !!this.token
  }

  private setToken(response: any) {
    if(response) {
      const expData = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('token-exp', expData.toString())
      localStorage.setItem('token', response.idToken  )
    } else localStorage.clear()
  }

  private get token() {
    const expDate = new Date(localStorage.getItem('token-exp') ?? '')
    if(new Date >= expDate) return this.logout()
    return localStorage.getItem('token')
  }
}
