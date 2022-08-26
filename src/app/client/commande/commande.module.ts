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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule} from 'ngx-pagination';
import { DateFilter, FiltreEtat } from '../shared/service/filtre.pipe';


@NgModule({
  declarations: [
    PanierComponent,
    CommandeComponent,
    LigneComponent,
    LivraisonComponent,
    ListeComponent,
    DateFilter,
    FiltreEtat
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    ProduitModule,
    LayoutModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    PanierComponent,
    LigneComponent,
    LivraisonComponent,
    ListeComponent
  ]
})
export class CommandeModule { } 
