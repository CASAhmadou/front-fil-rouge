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


@NgModule({
  declarations: [
    ProduitComponent,
    CatalogueComponent,
    BlogComponent,
    ListComponent,
    CardComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule,
  ]
})
export class ProduitModule { }
