import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Panier } from '../shared/models/panier';
import { PanierService } from '../shared/service/panier.service';

@Component({
  selector: 'cas-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  newItems:Panier={}
  items:any = []
  total:number =0
  constructor(private panier:PanierService,  private router:Router) { }


  ngOnInit(): void {
    this.panier.behav.subscribe(data=>{
      this.newItems = data
      if(data.commandeBurgers && data.commandeMenus)
      this.items = [...data.commandeBurgers,...data.commandeMenus]
      this.total = this.panier.getTotalPrice()
    })
  }

  delete(object: any){
    this.panier.removeCart(object)
  }

}
