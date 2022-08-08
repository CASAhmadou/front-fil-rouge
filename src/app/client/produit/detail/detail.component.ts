import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from '../../shared/models/catalogue';
import { Detail } from '../../shared/models/detail';
import { BurgerCommande, MenuCommande } from '../../shared/models/panier';
import { CatalogueService } from '../../shared/service/catalogue.service';
import { EventService } from '../../shared/service/event.service';
import { PanierService } from '../../shared/service/panier.service';

@Component({
  selector: 'cas-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // activeTab = 'search';

  // search(activeTab:any){
  //   this.activeTab = activeTab;
  // }

  // result(activeTab:any){
  //   this.activeTab = activeTab;
  // }

  detail$ : Observable<Detail> | null = null

  constructor(private serv:CatalogueService,private route : ActivatedRoute,
    private router:Router, private panier: PanierService, private event: EventService) { }

  private type: any =""
  private id: any = 0
  qte = 0
  bool = 0
  disabled_attr = false
  tab :any[] = []
  quantite = 0

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.type=this.route.snapshot.paramMap.get(this.type)
    this.detail$=this.serv.getProduit$(this.id)

    this.event.childEventListner().subscribe(qte =>{
      this.quantite += qte
    })
  }

  size:number = 1
  obj(event :any){
    this.size= event
  }

  qteMenu: number = 1;
  countEmit(value :number){
    this.qteMenu = value
  }

  AjoutPanier(detail:Detail){
    if (detail.menu){
      let menu:MenuCommande = {
        quantite:this.size,
        menu:detail.menu
      }
      this.panier.ajoutMenu(menu)
      // console.log(this.panier.newCart.value)
    }
    //console.log(detail.burger)
      // if(detail.burger){
      //   let burger:BurgerCommande = {
      //     quantite:this.size,
      //     burger:detail.burger
      //   }
      //   this.cartServ.addBurger(burger)
      //   console.log(this.cartServ.newCart.value)
      // }

  }












  panierOuvert():void{
    this.router.navigateByUrl(`commande/panier`)
  }



  message = ""
  message2 = ""
  textBool = false
  parentControl(event :any){
    if(this.tab.length==0)
    {
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
        this.tab.push(object);
    }
    else{
      var trouve=false
      this.tab.map(
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
        this.tab.push(object);
      }
      else{

        this.tab.map(
          data=>{
            if(data.idTaille==event.idTaille){
              let boissonsTab =
              {
                idBoisson:event.boissonTaille.idBoisson,
                size:this.size,
                stock:event.boissonTaille.stock
              }
              let tabBoisson:any[] = data.boissons
              let testBool = false
              tabBoisson.map(
                (bois,index)=>{
                  if(bois.idBoisson == event.boissonTaille.idBoisson){
                    testBool = true
                    data.boissons[index] = boissonsTab
                  }
                }
              )
              if(testBool==false){
                data.boissons.push(boissonsTab)
              }
            }
          }
        )
      }
    }
    //console.log(this.tab)
    this.textAlert(this.tab)
  }

  textAlert(tab :any[]):string{
    let totalSize = 0
      tab.forEach(element => {
      let tabBoissons:any[] = element.boissons
      tabBoissons.forEach(elem=>{
        totalSize+=elem.size
        if(totalSize > element.qte){
          this.message = "vous avez depasser le nombre de boissons"
          this.disabled_attr = true
        }
        else if(elem.size > elem.stock){
          this.message = "le stock est epuisé"
          this.disabled_attr = true
        }
        else{
          this.message = ""
          this.disabled_attr = false
        }
      })
    });
    return ""
  }

  parentControl2(event : any){
    if(this.tab.length==0){
      let obj2={
        idBoisson:event.idBoisson,
        size:this.size,
        stock:event.stock
      }
      this.tab.push(obj2)
    }
    else{
      var trouve=false
      this.tab.map(
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
        this.tab.push(obj2)
      }
      else{
        this.tab.map(data=>{
          data.size = event.size
        })
      }
    }
    console.log(this.tab)
    this.textAlert2(this.tab)
  }

  textAlert2(tab:any[]){
    tab.forEach(element=>{
      if(element.size > element.stock){
          this.message2 = "stock epuisé"
          this.disabled_attr = true
      }
      else{
        this.message2=""
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
