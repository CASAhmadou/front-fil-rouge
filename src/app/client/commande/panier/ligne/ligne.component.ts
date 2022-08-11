import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BurgerCommande, MenuCommande } from 'src/app/client/shared/models/panier';

@Component({
  selector: 'cas-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {

  @Input() isPanier = true;
  @Input('item') item : BurgerCommande | null=null;
  @Input('itemMenu') itemMenu : MenuCommande | null=null;

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

  delete(event:any){
    this.index.emit(event)
  }
  
   qte:number = 0
  value(event :any){
    this.qte = event.target.value
  }
}
