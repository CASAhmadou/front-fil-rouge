import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LayoutModule } from '../layout/layout.module';
import { BlogComponent } from './components/blog/blog.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
  ]
})
export class ClientModule { }
