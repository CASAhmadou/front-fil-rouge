import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import { SecuriteRoutingModule } from './securite--routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule,
    RouterModule,
  ],
  exports:[
    ConnexionComponent
  ]
})
export class SecuriteModule { }
