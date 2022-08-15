import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from '../../shared/models/catalogue';
import { Detail } from '../../shared/models/detail';
import { BurgerCommande, CommandeBoisson, CommandeFrite, CommandeMenuBoissonTaille, MenuCommande } from '../../shared/models/panier';
import { Produit } from '../../shared/models/produit';
import { CatalogueService } from '../../shared/service/catalogue.service';
import { EventService } from '../../shared/service/event.service';
import { PanierService } from '../../shared/service/panier.service';

@Component({
  selector: 'cas-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  detail$ : Observable<Detail> | null = null
  commandeMenuBoissonTailles : CommandeMenuBoissonTaille[] = []


  constructor(private serv:CatalogueService,private route : ActivatedRoute,
    private router:Router, private panier: PanierService, private event: EventService) { }

    private type: any =""
    private id: any = 0
    qte = 0
    vide = 0
    disabled_attr = false
    many : any[] = []
    quantite = 0
    boissonDuMenu: Produit[]=[]

  ngOnInit(): void {

    this.event.childEventListner().subscribe(qte =>{
      this.quantite += qte
      // console.log(qte)
    })

    this.id=this.route.snapshot.paramMap.get('id')
    this.type=this.route.snapshot.paramMap.get('type')
    this.detail$=this.serv.getProduit$(this.id)
  }

  desactiveButton(event: any) {
    this.disabled_attr =  event
  }

  //error
  size:number = 1
  obj(event :any){
    // alert(event)
    this.size= event
  }

  qteMenu: number = 1;
  countEmit(value :number){
    this.qteMenu = value
  }

  AjoutPanier(detail:Detail){

    if(detail.burger){
      let burger:BurgerCommande = {
        quantite:this.size,
        burger:detail.burger
      }
      this.panier.ajoutBurger(burger)
    }

    if (detail.menu){
      let menu:MenuCommande = {
        quantite:this.size,
        menu:{
          id: Number(detail.menu.id),
          nom: detail.menu.nom,
          image: detail.menu.image,
          type: detail.menu.type,
          prix:detail.menu.prix,
          commandeMenuBoissonTailles: this.commandeMenuBoissonTailles
        }
      }
      this.panier.ajoutMenu(menu)
      console.log(this.panier.behav.value)
    }


    // if(detail.tailleBoissons){
    //   alert(this.size)
    //     let boisson:CommandeBoisson = {
    //       quantite: this.size,
    //       boissonTailleBoisson: {}
    //     }
    //     this.panier.ajoutBoisson(boisson)
    //     console.log(this.panier.behav.value)
    //   }

    //   if(detail.portionFrites){
    //     let frite:CommandeFrite = {
    //       quantite: this.size,
    //       portionFrite: detail
    //     }
    //     this.panier.ajoutFrite(frite)
    //     console.log(this.panier.behav.value)
    //   }

  }

  panierOuvert():void{
    this.router.navigateByUrl(`commande/panier`)
  }



  text = ""
  text2 = ""
  textvide = false
  parentControl(event :any){
    if(this.many.length==0)
    {
        let object={
          idTaille:event.idTaille,
          qte:event.qte,
          boissons:[
            {
              idBoisson:event.boissonTaille.idBoisson,
               size:this.size,
               stock:event.boissonTaille.stock,
               idB: event.idB
            }
          ]
        }
        let commande={
          quantite: this.size,
          boissonTailles: {
            id:event.boissontTaille.idB
          }
        }
        this.commandeMenuBoissonTailles.push(commande)
        this.many.push(object);
    }
    else{
      var trouve=false
      this.many.map(
        data=>{
          if(data.idTaille==event.idTaille){
            trouve=true
          }
        }
      )
      if(trouve == false){
        let object={
          idTaille:event.idTaille,
          qte:event.qte,
          boissons:[
            {
              idBoisson:event.boissonTaille.idBoisson,
               size:this.size,
               stock:event.boissonTaille.stock
            }
          ]
        }
        this.many.push(object);
      }
      else{

        this.many.map(
          data=>{
            if(data.idTaille==event.idTaille){
              let boissonsmany =
              {
                idBoisson:event.boissonTaille.idBoisson,
                size:this.size,
                stock:event.boissonTaille.stock
              }
              let manyBoisson:any[] = data.boissons
              let testvide = false
              manyBoisson.map(
                (bois,index)=>{
                  if(bois.idBoisson == event.boissonTaille.idBoisson){
                    testvide = true
                    data.boissons[index] = boissonsmany
                  }
                }
              )
              if(testvide==false){
                data.boissons.push(boissonsmany)
              }
            }
          }
        )
      }
    }
    //console.log(this.many)
    this.textAlert(this.many)
  }

  textAlert(many :any[]):string{
    let totalsize = 0
      many.forEach(element => {
      let manyBoissons:any[] = element.boissons
      manyBoissons.forEach(elem=>{
        totalsize+=elem.size
        if(totalsize > element.qte){
          this.text = "vous avez depasser le nombre de boissons"
          this.disabled_attr = true
        }
        else if(elem.size > elem.stock){
          this.text = "le stock est epuisé"
          this.disabled_attr = true
        }
        else{
          this.text = ""
          this.disabled_attr = false
        }
      })
    });
    return ""
  }

  parentControl2(event : any){
    if(this.many.length==0){
      let obj2={
        idBoisson:event.idBoisson,
        size:this.size,
        stock:event.stock
      }
      this.many.push(obj2)
    }
    else{
      var trouve=false
      this.many.map(
        data=>{
          if(data.idBoisson==event.idBoisson){
            trouve=true
          }
        }
      )
      if(trouve == false){
        let obj2={
          idBoisson:event.idBoisson,
          size:this.size,
          stock:event.stock
        }
        this.many.push(obj2)
      }
      else{
        this.many.map(data=>{
          data.size = event.size
        })
      }
    }
    // console.log(this.many)
    this.textAlert2(this.many)
  }

  textAlert2(many:any[]){
    many.forEach(element=>{
      if(element.size > element.stock){
          this.text2 = "stock epuisé"
          this.disabled_attr = true
      }
      else{
        this.text2=""
        this.disabled_attr = false
      }
    })
  }
}























































 // console.log('ok');
  //   const id = this.route.snapshot.params['id'];
  //   // this.type = this.route.snapshot.paramMap.get('type') ;
  //   this.serv.getProduit$(id).subscribe(data => {
  //     this.detail$ = this.serv.getProduit$(this.detail$)
  //   })
