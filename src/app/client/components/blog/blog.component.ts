import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cas-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  produitOuvert(): void{
    this.router.navigateByUrl("produits/catalogue")
  }

}
