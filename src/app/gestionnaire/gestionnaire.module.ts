import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionnaireRoutingModule } from './gestionnaire-routing.module';
import { CommandeComponent } from './commande/commande.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommandeCLientFilter, CommandeDateFilter, CommandeFilterPipe, CommandeZoneFilter } from './shared/services/commande-filter.pipe';


@NgModule({
  declarations: [
    CommandeComponent,
    CommandeFilterPipe,
    CommandeDateFilter,
    CommandeCLientFilter,
    CommandeZoneFilter

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
