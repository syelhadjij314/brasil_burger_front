import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent /* ,canActivate : [AuthGuard] */},
  { path: 'detail/:id', component: DetailComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'commandes', component: CommandesComponent ,canActivate : [AuthGuard]},
]
;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
