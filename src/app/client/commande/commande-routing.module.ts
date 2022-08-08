import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path: "panier", component: PanierComponent},
  {path: '', component: CommandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
