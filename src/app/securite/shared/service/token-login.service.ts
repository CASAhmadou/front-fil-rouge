import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenLoginService {

  constructor(private router : Router) { }

  //garde token
  valueToken(token:string):void{
    localStorage.setItem('token', token)
    this.router.navigate(['produits'])
  }


  onLogin():boolean{
    const token = localStorage.getItem('token')
    return !! token
  }

  supToken():void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }



}
