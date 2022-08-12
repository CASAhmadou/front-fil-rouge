import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/client/shared/service/panier.service';
import { TokenLoginService } from 'src/app/securite/shared/service/token-login.service';

@Component({
  selector: 'cas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private panier: PanierService, private tokenLogin: TokenLoginService) { }

  isConnected=true
  point: number=0
  panierTotal:number=0
  ngOnInit(): void {
   this.isConnected= this.tokenLogin.onLogin()
    this.panier.behav.subscribe(data=> {
      if(data.commandeMenus && data.commandeBurgers && data.commandeFrites && data.commandeBoissons){
        this.panierTotal =data.commandeFrites.length + data.commandeBurgers.length
        + data.commandeBoissons.length + data.commandeMenus.length
        // console.log(this.panier)
      }
      this.point=this.panierTotal
    })
  }

  deconnect(){
    this.tokenLogin.supToken()
    this.isConnected=false
  }

}
