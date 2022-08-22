import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenLoginService } from 'src/app/securite/shared/service/token-login.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private commandeUrl: string = 'http://127.0.0.1:8000/api/commandes'

  private commandeEditUrl = 'http://127.0.0.1:8000/api/commandes'

  private commandeZoneUrl: string = 'http://127.0.0.1:8000/api/zones'

  private livreurUrl: string = 'http://127.0.0.1:8000/api/livreurs'

  private livraisonCreateUrl:string = 'http://127.0.0.1:8000/api/livraisons'

  private livraisonUrl:string = 'http://127.0.0.1:8000/api/livraisons'

  private livraisonCommandeUrl:string = 'http://127.0.0.1:8000/api/livraisons'

  private livraisonEditUrl:string = 'http://127.0.0.1:8000/api/livraisons'

  constructor(
    private http:HttpClient,
    private token : TokenLoginService
  ) { }

  /* all commande */
  commandeAll(){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(this.commandeUrl,authorizTok)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* commandes par zones */
  commandesZone(idZone:number){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>((`${this.commandeZoneUrl}/${idZone}/commandes`),authorizTok)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* liste des livreurs */
  livreurAll(){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(this.livreurUrl,authorizTok)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* fonction modif etat commande */
  commandeAnnuler (id:any,etat:string):Observable<number>{
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    }
    const body = {"etat": etat}
    return this.http.put<number>(this.commandeEditUrl+"/"+id,body,authorizTok);
  }

  /* fonction ajout livraison */
  ajoutLivraison(object:any){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    //console.log(authorizTok)
    return this.http.post(this.livraisonCreateUrl,object,authorizTok)
  }
  /* liste des livraisons  */
  livraisonAll(){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(this.livraisonUrl,authorizTok)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* commandes d une livraison */
  commandeByLivraison(id:any){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(`${this.livraisonCommandeUrl}/${id}/commandes`,authorizTok)
    .pipe(
      map(data=>{
        console.log(data)
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* add livreur */
  ajoutLivreur(object:any){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.post(this.livreurUrl,JSON.stringify(object),authorizTok)
  }

  /* liste des zones */
  zoneAll(){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(this.commandeZoneUrl,authorizTok)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }
  /* valider livraison */
  validerLivraison (id:any,etat:string):Observable<number>{
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    }
    const body = {"etat": etat}
    return this.http.put<number>(this.livraisonEditUrl+"/"+id,body,authorizTok);
  }
}
