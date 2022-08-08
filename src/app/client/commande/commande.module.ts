import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande.component';


@NgModule({
  declarations: [
    PanierComponent,
    CommandeComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule
  ],
  exports: [
    PanierComponent
  ]
})
export class CommandeModule { }
