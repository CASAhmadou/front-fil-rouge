import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LayoutModule } from '../layout/layout.module';
import { ClientComponent } from './client.component';
import { BlogComponent } from './components/blog/blog.component';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
     ClientComponent
  ]
})
export class ClientModule { }
