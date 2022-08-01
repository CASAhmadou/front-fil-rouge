import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
  ],
  exports: [
    ClientComponent,
  ]
})
export class ClientModule { }
