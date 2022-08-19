import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from 'src/app/client/shared/service/panier.service';
import { TokenLoginService } from 'src/app/securite/shared/service/token-login.service';

@Component({
  selector: 'cas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private panier: PanierService, private tokenLogin: TokenLoginService, private router: Router,private route : ActivatedRoute) { }

  isConnected=true
  point: number=0
  panierTotal:number=0
  ngOnInit(): void {
   this.isConnected= this.tokenLogin.onLogin()
    this.panier.behav.subscribe(data=> {
      if(data.commandeMenus && data.commandeBurgers && data.commandeFrites && data.commandeBoissons){
        this.panierTotal =data.commandeFrites.length + data.commandeBurgers.length
        + data.commandeBoissons.length + data.commandeMenus.length
      }
      this.point=this.panierTotal
    })
  }

  deconnect(){
    this.tokenLogin.supToken()
    this.isConnected=false
  }

  listeCom():void{
    this.router.navigateByUrl(`commande/liste`)
  }

  livraison():void{
    this.router.navigateByUrl(`gestionnaire/commande/livraison`)
  }

  livreur():void{
    this.router.navigateByUrl(`gestionnaire/commande/livreur`)
  }

}
