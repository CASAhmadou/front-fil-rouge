import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../../shared/models/catalogue';
import { Produit } from '../../shared/models/produit';
import { CatalogueService } from '../../shared/service/catalogue.service';

@Component({
  selector: 'cas-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  catalogues$ : Observable<Catalogue> | null = null
  prod: Produit[] | undefined = undefined

  constructor(private serv:CatalogueService) { }

  ngOnInit(): void {
    this.serv.getCatalogue().subscribe(data => {
      this.prod =data.produits
    })
  }

  CatalogueFiltre(type:string){
    this.serv.getCatalogue().subscribe(data => {
      if(type!=""){
        this.prod = data.produits?.filter(produit => produit.type === type)
      }else{
        this.prod = data.produits
      }
    })
  }

}
