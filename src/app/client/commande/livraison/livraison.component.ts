import { Component, OnInit } from '@angular/core';
import { Panier } from '../../shared/models/panier';
import { PanierService } from '../../shared/service/panier.service';

@Component({
  selector: 'cas-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  zone: any =''
  constructor(private panier: PanierService) { }

  ngOnInit(): void {
    this.panier.behav.subscribe(data=>{
     console.log(this.zone =data.zones)
    })
  }
  // this.panier.behav.subscribe(data=>{
  //   this.newItems = data
  //   if(data.commandeBurgers && data.commandeMenus)
  //   this.items = [...data.commandeBurgers,...data.commandeMenus]
  //   this.total = this.panier.getTotalPrice()
  // })
}
