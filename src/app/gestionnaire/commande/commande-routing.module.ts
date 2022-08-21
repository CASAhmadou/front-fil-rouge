import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { ListeLivreurComponent } from './livreur/liste-livreur/liste-livreur.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LivreurComponent } from './livreur/livreur.component';
import { ListeLivraisonComponent } from './livraison/liste-livraison/liste-livraison.component';
import { CommandeLivraisonComponent } from './livraison/commande-livraison/commande-livraison.component';

const routes: Routes = [
  { path: '', component: CommandeComponent},
  { path: 'livraison', component: LivraisonComponent},
  { path: 'liste-livraison', component: ListeLivraisonComponent},
  { path: 'livreur', component: ListeLivreurComponent},
  { path: 'nouveau-livreur', component: LivreurComponent},
  { path: 'commande-livraison', component: CommandeLivraisonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
