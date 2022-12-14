import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailComponent } from './detail/detail.component';
import { ProduitComponent } from './produit.component';

const routes: Routes = [
  { path: '', component: ProduitComponent},
  { path: 'catalogue', component: CatalogueComponent},
  { path: 'details/:type/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProduitRoutingModule { }
