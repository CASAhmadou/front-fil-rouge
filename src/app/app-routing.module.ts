import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './client/produit/produit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoleGuardGuard } from './_helpers/role-guard.guard';

const routes: Routes = [
  { path: 'produits', loadChildren: () => import(`./client/produit/produit.module`).then(m => m.ProduitModule)},
  {path: 'commande', loadChildren: () => import(`./client/commande/commande.module`).then(m=>m.CommandeModule),canActivate:[RoleGuardGuard]},
  { path: 'accueil', component: ProduitComponent},
  { path: '', redirectTo: 'accueil', pathMatch:"full"},
  {path: 'connexion', loadChildren: () => import(`./securite/securite.module`).then(m=>m.SecuriteModule)},
  { path:'**', component: NotFoundComponent},
  {path: 'gestionnaire', loadChildren: () => import(`./gestionnaire/gestionnaire.module`).then(m => m.GestionnaireModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
