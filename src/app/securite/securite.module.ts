import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import { SecuriteRoutingModule } from './securite--routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ConnexionComponent
  ]
})
export class SecuriteModule { }
