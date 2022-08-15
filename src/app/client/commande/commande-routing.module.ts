import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { CommandeComponent } from './commande.component';
import { ListeComponent } from './liste/liste.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path: "panier", component: PanierComponent},
  {path: '', component: CommandeComponent, canActivate: [AuthGuard] },
  { path: "liste", component: ListeComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
