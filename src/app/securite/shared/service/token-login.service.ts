import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

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

  ouToken():any{
    let token = localStorage.getItem('token') || ''
    return token
  }

  haveAccess(){
    var loginToken= localStorage.getItem('token') || ''
    var _extractedToken=loginToken.split('.')[1]
    var _atobdata= atob(_extractedToken)
    var _finaldata=JSON.parse(_atobdata)

    if(_finaldata.roles[0]=="ROLE_CLIENT"){
      return true
    }
    return false
  }

}
