import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TokenLoginService } from 'src/app/securite/shared/service/token-login.service';
import { Panier } from '../../shared/models/panier';
import { CommandeService } from '../../shared/service/commande.service';
import { PanierService } from '../../shared/service/panier.service';

@Component({
  selector: 'cas-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  newItems:Panier={}
  items:any = []
  zones: any=[]
  registerForm:any
  total:number =0
  constructor(private token: TokenLoginService, private panier:PanierService,  private router:Router, private ngToast: NgToastService, private commande: CommandeService) { }


  ngOnInit(): void {
    this.panier.behav.subscribe(data=>{
      this.newItems = data
      if(data.commandeBurgers && data.commandeMenus && data.commandeBoissons && data.commandeFrites){
      this.items = [...data.commandeBurgers,...data.commandeMenus, ...data.commandeBoissons, ...data.commandeFrites]
      this.total = this.panier.getTotalPrice()
      }
    })

    this.commande.zones().subscribe(data=>{
      this.zones=data
    })

    this.registerForm = new FormGroup({
      "zone": new FormControl(null, [Validators.required]),
    })

  }

  commandeValide(){
    if(this.token.onLogin()){
      let zone = {
        id:this.registerForm.get('zone').value
      }
      this.panier.behav.value.zones= zone
      this.commande.commandeEnregistre(this.panier.behav.value).subscribe(
        error=> console.log(error)
      )
      this.panier.removeAllCart()
      this.ngToast.success({detail:"success",summary:"enregistré"})
    }
    else{
      this.router.navigate(['connexion'])
    }
  }

  sendData(){
    console.log(this.registerForm.zone.value)
  }
  get zone(){
    return this.registerForm.get('zone')
  }

  delete(object: any){
    this.panier.removeCart(object)
  }

  newObject = {}
  DeleteIn(event :any){
    this.newObject = event
    this.panier.removeCart(Object)
    this.ngToast.info({detail:"info", summary:" Objet supprimé"})
  }


}
