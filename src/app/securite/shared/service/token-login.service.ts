import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import jwt_decode from "jwt-decode"

@Injectable({
  providedIn: 'root'
})
export class TokenLoginService {

  constructor(private router : Router, private toast: NgToastService) { }

  //garde token
  valueToken(token:string):void{
    let tokInfo = this.getDecodedAccessToken(token)
    // console.log(tokInfo)
      if (tokInfo.roles[0] == ["ROLE_CLIENT"]) {
        this.router.navigate(['commande/panier'])
        this.toast.success({detail:"success",summary:"connexion reussie"})

      }else{
        this.router.navigate(['gestionnaire'])
        this.toast.error({detail:"ERROR",summary:"login ou mot de passe incorrect"})

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

  //vues du gestionnaie
  viewGestionnaire():boolean{
    const gest = this.haveAccess()
    return gest
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

  getId():any{
    const id= localStorage.getItem('id')
    // console.log(id)
    return Number(id)
  }
}
