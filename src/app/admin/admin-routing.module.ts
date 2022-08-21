import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListeLivraisonComponent } from './liste-livraison/liste-livraison.component';
import { LivraisonComponent } from './livraison/livraison.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'livraison', component: LivraisonComponent },
  { path: 'livraisons', component: ListeLivraisonComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
