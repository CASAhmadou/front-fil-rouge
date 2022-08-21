import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from '../_helpers/role-guard.guard';
import { CommandeComponent } from './commande/commande.component';

const routes: Routes = [
  {path: 'commande', loadChildren: () => import('./commande/commande.module').then(m=>m.CommandeModule)},
  {path: '', component: CommandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
