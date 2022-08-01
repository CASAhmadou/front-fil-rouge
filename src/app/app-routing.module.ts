import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './client/produit/catalogue/catalogue.component';
import { ProduitComponent } from './client/produit/produit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecuriteComponent } from './securite/securite.component';

const routes: Routes = [
  { path: 'produits', loadChildren: () => import(`./client/produit/produit.module`).then(m => m.ProduitModule)},
  { path: 'accueil', component: ProduitComponent},
  { path: '', redirectTo: 'accueil', pathMatch:"full"},
  { path: 'connexion', component: SecuriteComponent},
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
