import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { LivraisonComponent } from './livraison/livraison.component';
import { LivreurComponent } from './livreur/livreur.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListeLivreurComponent } from './livreur/liste-livreur/liste-livreur.component';
import { ListeLivraisonComponent } from './livraison/liste-livraison/liste-livraison.component';
import { CommandeLivraisonComponent } from './livraison/commande-livraison/commande-livraison.component';


@NgModule({
  declarations: [
    LivraisonComponent,
    ListeLivreurComponent,
    LivreurComponent,
    ListeLivraisonComponent,
    CommandeLivraisonComponent,
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    LayoutModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  exports:[
    LivraisonComponent,
    ListeLivreurComponent,
    LivreurComponent,
  ]
})
export class CommandeModule { }
