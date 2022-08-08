import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/client/shared/service/panier.service';

@Component({
  selector: 'cas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private panier: PanierService) { }

  number: number =0
  totalPanier: number = 0
  ngOnInit(): void {
    this.panier.newCart.subscribe(data=> {
      if(data.commandeBurgers && data.commandeMenus
        && data.commandeFrites && data.commandeBoissons){
        this.number=data.commandeBurgers?.length + data.commandeMenus?.length
         + data.commandeFrites?.length + data.commandeBoissons?.length
      }
      console.log(this.number)
      this.number = this.totalPanier
    })
  }

}
