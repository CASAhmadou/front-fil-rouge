import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from 'src/app/client/shared/models/detail';
import { BurgerCommande, CommandeBoisson, CommandeFrite, MenuCommande } from 'src/app/client/shared/models/panier';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'cas-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {

  @Input() isPanier = true;
  @Input('bur') bur : BurgerCommande | null=null;
  @Input('men') men : MenuCommande | null=null;

  @Output() index: EventEmitter<any> = new EventEmitter();
  @Output() MontantTotal: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  size:number = 0
  resize(delta: number) {
    this.size = Math.min(40, Math.max(1, +this.size + delta));
  }

  getPrixBurger(data:any){
    let prix = data.burger.prix * (data.quantite+this.size)
    return prix
  }

  getPrixMenu(data:any){
    let prix = data.menu.prix * (data.quantite+this.size)
    return prix
  }

  getPrixBoisson(data:any){
    let prix = data.boisson.prix * (data.quantite+this.size)
    return prix
  }

  // getPrixFrite(data:any){
  //   let prix = data.produi * (data.quantite+this.size)
  //   return prix
  // }

  delete(event:any){
    alert('ok')
    this.index.emit(event)
  }

   qte:number = 0
  value(event :any){
    this.qte = event.target.value
  }
}
