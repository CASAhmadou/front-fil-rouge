import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'produit', loadChildren: () => import('./produit/produit.module').then(m=>m.ProduitModule)},
  {path: 'commande', loadChildren: () => import('./commande/commande.module').then(m=>m.CommandeModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
