import { Component, Input, OnInit } from '@angular/core';
import { BoissonTailleBoisson, TailleBoisson } from 'src/app/client/shared/models/detail';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'cas-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {
  @Input('boissonTailleBoissons') boissonTailleBoissons : BoissonTailleBoisson|null = null;
  @Input('boissons') boissons : TailleBoisson|null = null;
  @Input('frites') frites : Produit|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
