import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TokenLoginService } from 'src/app/securite/shared/service/token-login.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  private urlFrites:string = 'http://127.0.0.1:8000/api/portion_frites'
  private urlTaille:string = 'http://127.0.0.1:8000/api/taille_boissons'
  private urlPostMenu:string = 'http://127.0.0.1:8000/api/menus'
  private urlPostBurger:string = 'http://127.0.0.1:8000/api/burgers'
  private urlDeleteMenu:string = 'http://127.0.0.1:8000/api/menus'
  private urlDeleteBurger:string = 'http://127.0.0.1:8000/api/burgers'
  private urlAllProducts:string = 'http://127.0.0.1:8000/api/produits'
  private urlAllUsers:string = 'http://127.0.0.1:8000/api/users'
  private urlBoissons:string = 'http://127.0.0.1:8000/api/boissons'

  constructor(
    private http:HttpClient,
    private token : TokenLoginService
    ) { }

  allFrites(){
    return this.http.get<any>(this.urlFrites)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      )
    )
  }

  allBoissons(){
    return this.http.get<any>(this.urlBoissons)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      )
    )
  }

  allTaille(){
    return this.http.get<any>(this.urlTaille)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /*  ajouter menu */
  addMenu(object:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    //console.log(httpOptions)
    return this.http.post(this.urlPostMenu,object,httpOptions)
  }

    /*  ajouter burger */
    addBurger(object:any){
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token.ouToken()}`
        })
      };
      //console.log(httpOptions)
      return this.http.post(this.urlPostBurger,object,httpOptions)
    }

  /* archiver menu*/

  menuDelete (id:String):Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.delete<number>(this.urlDeleteMenu+"/"+id,httpOptions);
  }
   /* archiver burger*/

   burgerDelete (id:String):Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.delete<number>(this.urlDeleteBurger+"/"+id,httpOptions);
  }

  /* all products  */
  allProducts(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(this.urlAllProducts,httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* all users  */
  allUsers(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(this.urlAllUsers,httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
     ))
  }

}
