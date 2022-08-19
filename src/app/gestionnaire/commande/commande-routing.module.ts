import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { ListeLivreurComponent } from './livreur/liste-livreur/liste-livreur.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LivreurComponent } from './livreur/livreur.component';

const routes: Routes = [
  { path: '', component: CommandeComponent},
  { path: 'livraison', component: LivraisonComponent},
  { path: 'livreur', component: ListeLivreurComponent},
  { path: 'nouveau-livreur', component: LivreurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
