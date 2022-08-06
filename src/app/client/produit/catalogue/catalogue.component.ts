import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  type!:string

  constructor(private serv:CatalogueService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.queryParams
      .subscribe(params => {
        this.type=params["type"]
      }
    );
    this.serv.getCatalogue().subscribe(data => {
      this.prod = this.type=="menus"?data.menus:data.burgers
    })

    // this.serv.getCatalogue().subscribe(data => {
    //   if(this.type!=''){
    //     this.prod = data.produits
    //   }
    // })
  }
}
