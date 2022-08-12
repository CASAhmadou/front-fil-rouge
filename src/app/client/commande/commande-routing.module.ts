import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { ListComponent } from '../components/list/list.component';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path: "panier", component: PanierComponent},
  {path: '', component: CommandeComponent, canActivate: [AuthGuard] },
  { path: 'liste', component: ListComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
