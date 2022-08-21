import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TokenLoginService } from 'src/app/securite/shared/service/token-login.service';
import { Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
   private commandeUrl = "http://localhost:8000/api/commandes";
   private zoneUrl = "http://127.0.0.1:8000/api/zones"
   private comClientUrl = "http://127.0.0.1:8000/api/clients/2/commandes";

  constructor(private http: HttpClient, private token: TokenLoginService) { }

  commandeEnregistre(panier:Panier){
    let variable = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization':`Bearer ${this.token.ouToken()}`
      })
    }

    return this.http.post(this.commandeUrl,JSON.stringify(panier),variable)
  }

  commandeClient(){
    let variable = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization':`Bearer ${this.token.ouToken()}`
      })
    }
    return this.http.get<any>(this.comClientUrl,variable).pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      })
    )
  }

  zoneAll(){
    return this.http.get<any>(this.zoneUrl).pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      })
    )
  }
}
