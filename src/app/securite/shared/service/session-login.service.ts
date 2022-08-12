import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Token, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {

  private login_check = "http://127.0.0.1:8000/api/login_check"

  constructor(private http:HttpClient) { }

  nameLogin(users: User): Observable<Token>{
    return this.http.post<Token>(this.login_check, users )
  }

 
}
