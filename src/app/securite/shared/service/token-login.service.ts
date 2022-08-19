import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router, RouterStateSnapshot } from '@angular/router';
import jwt_decode from "jwt-decode"

@Injectable({
  providedIn: 'root'
})
export class TokenLoginService {

  constructor(private router : Router) { }

  //garde token
  valueToken(token:string):void{
    let tokInfo = this.getDecodedAccessToken(token)
      if (tokInfo.roles[0] == ["ROLE_CLIENT"]) {
        this.router.navigate(['commande/panier'])
      }else{
        this.router.navigate(['gestionnaire'])
      }
    localStorage.setItem('token', token)
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
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
<<<<<<< HEAD
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

  getId():any{
    const id= localStorage.getItem('id')
    return Number(id)
  }

=======
    let token = localStorage.getItem('token')
    return token
  }
>>>>>>> bf6d652c79bf72474aa49aa96a8fa6002931c11f

}
