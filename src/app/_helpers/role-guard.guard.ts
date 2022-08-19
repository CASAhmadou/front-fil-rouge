import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenLoginService } from '../securite/shared/service/token-login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private token:TokenLoginService, private router: Router ){}
  canActivate(){
      if(this.token.haveAccess())
       return true;
      else{
        this.router.navigate(['gestionnaire/commande'])
        return false
      }
  }

}
