import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Catalogue } from '../models/catalogue';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})

export class CatalogueService {

  private linkBackEnd: string = "http://127.0.0.1:8000/api/catalogues"
  private apiDetail="http://127.0.0.1:8000/api/details"

  constructor(private http:HttpClient) { }

    getCatalogue(): Observable<Catalogue>{
      return this.http.get<any>(this.linkBackEnd).pipe(
        map(data=>{
          let catalogues: Catalogue= {
            burgers: data['hydra:member'][0]['burgers'],
            menus: data['hydra:member'][1]['menus'],
          }
          data.produits=[...catalogues.menus,...catalogues.burgers]
          return catalogues
          // return data
        })
      )
    }

  getProduit$=(id:any)=>{
    return this.http.get<any>(
      `${this.apiDetail}/${id}`).pipe(
          map(data=>{
            return data
          })
      )
  }



















  // getProduit$(id:number,type:string):Observable<Detail>{

  //   if(type=="burger"){
  //     return this.http.get<Detail>(`${this.apiDetail}/burgers/${id}}`)
  //   }
  //   return this.http.get<Detail>(`${this.apiDetail}/menus/${id}}`)
  // }

}






























  // all(): Observable<Catalogue>{
  //   return this.http.get<Catalogue>(this.linkBackEnd).pipe(
  //         map(data=>{
  //           let catalogues: Catalogue= {
  //             burgers: data.burgers,
  //             menus: data.menus
  //         }
  //         data.produits=[...catalogues.burgers,...catalogues.burgers]
  //         return data
  //       })
  //     )
  // }

  // all():Observable<Catalogue[]> {
  //   return this.http.get<Catalogue[]>(this.linkBackEnd)
  // }






  // post$ = (id:number) => {
  //   return this.http.get<Post>(`${this.url}/${id}`)
  // }

  // getBurger():Observable<Catalogue>{
  //   return this.http.get<Catalogue>(this.apiCatalogue).pipe(
  //     map(data=>{
  //       data.produit=[...data.burger]
  //       return data
  //     })
  //   )
  // }


  // getMenu():Observable<Catalogue>{
  //   return this.http.get<Catalogue>(this.apiCatalogue).pipe(
  //     map(data=>{
  //       data.produit=[...data.menu]
  //       return data
  //     })
  //   )
  // }
