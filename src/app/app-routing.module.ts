import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './client/produit/catalogue/catalogue.component';
import { ProduitComponent } from './client/produit/produit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecuriteComponent } from './securite/securite.component';

const routes: Routes = [
  { path: 'produits', loadChildren: () => import(`./client/produit/produit.module`).then(m => m.ProduitModule)},
  {path: 'commande', loadChildren: () => import(`./client/commande/commande.module`).then(m=>m.CommandeModule)},
  { path: 'accueil', component: ProduitComponent},
  { path: '', redirectTo: 'accueil', pathMatch:"full"},
  {path: 'connexion', loadChildren: () => import(`./securite/securite.module`).then(m=>m.SecuriteModule)},
  { path:'**', component: NotFoundComponent}
  // {path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
