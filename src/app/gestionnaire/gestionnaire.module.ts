import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionnaireRoutingModule } from './gestionnaire-routing.module';
import { CommandeComponent } from './commande/commande.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommandeCLientFilter, CommandeDateFilter, CommandeFilterPipe, CommandeZoneFilter } from './shared/services/commande-filter.pipe';
import { MenuComponent } from './produit/menu/menu.component';
import { AjoutMenuComponent } from './produit/menu/ajout-menu/ajout-menu.component';
import { ComplementComponent } from './produit/complement/complement.component';
import { BurgerComponent } from './produit/burger/burger.component';
import { AjoutBurgerComponent } from './produit/burger/ajout-burger/ajout-burger.component';


@NgModule({
  declarations: [
    CommandeComponent,
    CommandeFilterPipe,
    CommandeDateFilter,
    CommandeCLientFilter,
    CommandeZoneFilter,
    MenuComponent,
    AjoutMenuComponent,
    ComplementComponent,
    BurgerComponent,
    AjoutBurgerComponent

  ],
  imports: [
    CommonModule,
    GestionnaireRoutingModule,
    LayoutModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class GestionnaireModule { }
