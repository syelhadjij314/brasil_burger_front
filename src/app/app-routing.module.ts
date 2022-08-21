import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'produit', loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) },
  { path: '', redirectTo: 'produit',pathMatch:"full"}, 
  { path: 'login', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: "**",component: NotFoundComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
