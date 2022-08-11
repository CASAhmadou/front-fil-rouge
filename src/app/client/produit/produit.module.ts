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
import { ChoixBoissonComponent } from './detail/choix-boisson/choix-boisson.component';
import { DetailMenuComponent } from './detail/detail-menu/detail-menu.component';
import { CompterComponent } from './detail/compter/compter.component';
import { ComplementComponent } from './detail/complement/complement.component';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    ProduitComponent,
    CatalogueComponent,
    BlogComponent,
    ListComponent,
    CardComponent,
    DetailComponent,
    CompterComponent,
    ComplementComponent,
    ChoixBoissonComponent,
    DetailMenuComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule,
    LayoutModule
  ],
  exports:[
    CompterComponent,
    ComplementComponent,
    ChoixBoissonComponent,
    DetailComponent,
    DetailMenuComponent
  ]

})
export class ProduitModule { }
