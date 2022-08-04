import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'cas-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input('type') produit : Produit|null = null; 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  produitOuvert(): void{
    this.router.navigateByUrl("produits/catalogue")
    
  }

}
