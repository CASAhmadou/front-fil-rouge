import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoissonTailleBoisson, MenuTailleBoisson, TailleBoisson } from 'src/app/client/shared/models/detail';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'cas-choix-boisson',
  templateUrl: './choix-boisson.component.html',
  styleUrls: ['./choix-boisson.component.css']
})

export class ChoixBoissonComponent implements OnInit {
  @Input('boissons') boissons : TailleBoisson|null = null;
  @Input('tailleBoissons') tailleBoissons : MenuTailleBoisson|null = null;
  @Input('frites') frites : Produit|null = null;
  @Input('qteMenu') qteMenu : number =1;

  @Output() sizeChange: EventEmitter<number> = new EventEmitter();
  @Output() ObjectControl: EventEmitter<any> = new EventEmitter();
  @Output() count: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  newSize :number = 0
  size = 0
  testBool :boolean = false;

  test(idTaille:any,qte:number,idBoisson:any,value:number,stock:any,idB:any){
    this.size = value
    this.sizeChange.emit(this.size)
    let obj={
      idTaille:idTaille,
      qte:qte,
      boissonTaille:{
        idBoisson:idBoisson,
        size:this.size,
        stock:stock,
        idB:idB
      }
    }
    this.ObjectControl.emit(obj)
  }
  test2(idBoisson:any,event:any,stock:any){
    this.size = event
    let obj2={
      idBoisson:idBoisson,
      size:this.size,
      stock:stock
    }
    this.ObjectControl.emit(obj2)
  }
  textControl():string{
    if(this.testBool==true){
      return "vous avez depassé la quantite"
    }
    return ""
  }

}
