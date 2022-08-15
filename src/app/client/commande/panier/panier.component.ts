import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TokenLoginService } from 'src/app/securite/shared/service/token-login.service';
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
  constructor(private token: TokenLoginService, private panier:PanierService,  private router:Router, private ngtoast: NgToastService) { }


  ngOnInit(): void {
    this.panier.behav.subscribe(data=>{
      this.newItems = data
      if(data.commandeBurgers && data.commandeMenus && data.commandeBoissons && data.commandeFrites){
      this.items = [...data.commandeBurgers,...data.commandeMenus]
      this.total = this.panier.getTotalPrice()
    }

    })

  }

  delete(object: any){
    this.panier.removeCart(object)
  }

  newObject = {}
  DeleteIn(event :any){
    this.newObject = event
    this.panier.removeCart(Object)
    this.ngtoast.info({detail:"info", summary:" Objet supprimé"})
  }
  // getTotal(data:any){
  //   let subs = 0
  //   for(const item of data){
  //     subs += 1000
  //   }
  //   this.total = subs
  // }

}
