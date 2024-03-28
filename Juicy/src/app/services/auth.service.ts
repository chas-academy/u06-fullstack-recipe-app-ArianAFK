import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/Login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  postLogin(loginObj: Login) {
    if (!loginObj) return
    console.log(loginObj);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.post<any>('http://127.0.0.1:8000/api/login', loginObj, { headers })
  }
}
