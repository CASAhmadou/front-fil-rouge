import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BoissonTailleBoisson, Detail, TailleBoisson } from 'src/app/client/shared/models/detail';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'cas-compter',
  templateUrl: './compter.component.html',
  styleUrls: ['./compter.component.css']
})
export class CompterComponent implements OnInit {

  @Output() disabled: EventEmitter<any> = new EventEmitter();
  @Output() count: EventEmitter<any> = new EventEmitter();
  @Output() sizeChange : EventEmitter<any> = new EventEmitter();

  @Input()  size: number = 0;
  @Input('boissonTailleBoissons') boissonTailleBoissons : BoissonTailleBoisson|null = null;
  @Input('produits') produits :Produit|null = null;
  @Input('boisson') boisson : TailleBoisson|null = null;
  @Input('frites') frites : Produit|null = null;

  constructor() { }

  // taille choisie du menu
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(1, +this.size + delta));
    this.sizeChange.emit(this.size)
   
    this.count.emit(this.size)
  }

  ngOnInit(): void {
  }

   /* desactivation du bouton */
   disabled_attr = false
   testDisabled(event :any){
     const value  = event.target.value;
     if(value == 0 ){
       this.disabled_attr = true
       this.disabled.emit(this.disabled_attr)
     }
     if(value != 0){
       this.disabled_attr = false
       this.disabled.emit(this.disabled_attr)
     }
   }

   /*controle de quantite */
  number :number = 1
  validateNumber() :string{
    if(this.number == 0){
      return "Quantite choisie doit etre superieure ou egal a 1"
    }
    return ""
  }
}
