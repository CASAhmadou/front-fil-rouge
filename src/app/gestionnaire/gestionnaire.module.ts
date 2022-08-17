import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionnaireRoutingModule } from './gestionnaire-routing.module';
import { GestionnaireComponent } from './gestionnaire.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GestionnaireComponent
  ],
  imports: [
    CommonModule,
    GestionnaireRoutingModule,
    LayoutModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports:[
    GestionnaireComponent
  ]
})
export class GestionnaireModule { }
