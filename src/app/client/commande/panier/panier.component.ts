import { Component, OnInit } from '@angular/core';
import { Panier } from '../../shared/models/panier';
import { PanierService } from '../../shared/service/panier.service';

@Component({
  selector: 'cas-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  newItems:Panier={}
  items:any = []
  total:number =0
  constructor(private cartServ:PanierService) { }


  ngOnInit(): void {
    // this.cartServ.newCart.subscribe(data=>{
    //   this.newItems = data
    //   if(data.commandeBurgers && data.commandeMenus)
    //   this.items = [...data.commandeBurgers,...data.commandeMenus]
    //   if(this.items){
    //     this.getTotal(this.items)
    //   }
    // })
  }


  getTotal(data:any){
    let subs = 0
    for(const item of data){
      subs += 1000
    }
    this.total = subs
  }

}
