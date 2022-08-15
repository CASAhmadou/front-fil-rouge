import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande.component';
import { LigneComponent } from './panier/ligne/ligne.component';
import { ProduitModule } from '../produit/produit.module';
import { LivraisonComponent } from './livraison/livraison.component';
import { ListeComponent } from './liste/liste.component';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    PanierComponent,
    CommandeComponent,
    LigneComponent,
    LivraisonComponent,
    ListeComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    ProduitModule,
    LayoutModule
  ],
  exports: [
    PanierComponent,
    LigneComponent,
    LivraisonComponent,
    ListeComponent
  ]
})
export class CommandeModule { }
