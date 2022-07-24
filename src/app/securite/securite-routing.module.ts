import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuriteComponent } from './securite.component';

const routes: Routes = [{ path: '', component: SecuriteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuriteRoutingModule { }
