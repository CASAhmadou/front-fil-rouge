import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { SecuriteComponent } from './securite.component';

const routes: Routes = [
  { path: '', component:SecuriteComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SecuriteRoutingModule { }
