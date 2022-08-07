import { Component, Input, OnInit } from '@angular/core';
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
  // @Input() boiss :BoissonTailleBoisson|null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
