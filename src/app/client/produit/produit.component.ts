import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from '../shared/models/catalogue';
import { Produit } from '../shared/models/produit';
import { CatalogueService } from '../shared/service/catalogue.service';

@Component({
  selector: 'cas-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  catalogues$ : Observable<Catalogue> | null = null
  prod: Produit[] | undefined =  undefined

  constructor(private serv:CatalogueService, private sanitizier: DomSanitizer, private router:Router) { }

  ngOnInit(): void {
  }

  // i: number = 0
  // panier(): void{
  //   alert("ok")
  //   // this.router.navigateByUrl(`produits/details/${this.produit?.type}/${this.produit?.id}`)
  // }
}
