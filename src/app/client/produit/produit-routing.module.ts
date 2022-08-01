import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProduitComponent } from './produit.component';

const routes: Routes = [
  { path: '', component: ProduitComponent},
  { path: 'catalogue', component: CatalogueComponent},
  // { path: 'burgers', component: BurgerComponent},
  // { path: 'boisson', component: BoissonComponent},
  // { path: 'frite', component: FriteComponent},
  // { path: 'detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
