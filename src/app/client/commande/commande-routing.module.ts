import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../components/list/list.component';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path: "panier", component: PanierComponent},
  {path: '', component: CommandeComponent},
  { path: 'liste', component: ListComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
