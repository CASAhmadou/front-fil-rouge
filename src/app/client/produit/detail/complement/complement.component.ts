import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoissonTailleBoisson, TailleBoisson } from 'src/app/client/shared/models/detail';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'cas-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {
  @Input('boissonTailleBoisson') boissonTailleBoisson : BoissonTailleBoisson|null = null;
  @Input('boissons') boissons : TailleBoisson|null = null;
  @Input('frites') frites : Produit|null = null;
  @Input('boisson') boisson : BoissonTailleBoisson|null = null;

  @Output() sizeChange : EventEmitter<number> = new EventEmitter();
  @Output() count: EventEmitter<any> = new EventEmitter();

  constructor() { }

  fontSizePx = 0;
  size = 0
  tailleControle(value :number){

    this.size = value
    // alert(this.size)
    this.sizeChange.emit(this.size)
  }


  ngOnInit(): void {
  }

}
