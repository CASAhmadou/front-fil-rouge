import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from '../components/blog/blog.component';
import { ProduitComponent } from './produit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from '../components/list/list.component';
import { CardComponent } from '../components/card/card.component';
import { DetailComponent } from './detail/detail.component';
import { CardCountComponent } from './detail/card-count/card-count.component';
import { CardDetailComponent } from './detail/card-detail/card-detail.component';
import { ChoixBoissonComponent } from './detail/choix-boisson/choix-boisson.component';
import { DetailMenuComponent } from './detail/detail-menu/detail-menu.component';


@NgModule({
  declarations: [
    ProduitComponent,
    CatalogueComponent,
    BlogComponent,
    ListComponent,
    CardComponent,
    DetailComponent,
    CardCountComponent,
    CardDetailComponent,
    ChoixBoissonComponent,
    DetailMenuComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule,
  ]
})
export class ProduitModule { }
