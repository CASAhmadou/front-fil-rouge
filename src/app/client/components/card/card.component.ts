import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Produit } from '../../shared/models/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'cas-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private sanitizier: DomSanitizer, private router:Router) { }
  @Input('catalogues') produit : Produit | undefined = undefined

  ngOnInit(): void {
  }

  // detailOuvert(): void{
  //   this.
  // }

  detailOuvert(): void{
    this.router.navigateByUrl(`produits/details/${this.produit?.type}/${this.produit?.id}`)
  }



}
