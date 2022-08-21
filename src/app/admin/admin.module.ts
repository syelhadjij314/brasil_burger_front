import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { FilterLivraisonCommandePipe } from '../shared/pipe/filter.livraison.commande.pipe';
import { ListeLivraisonComponent } from './liste-livraison/liste-livraison.component';


@NgModule({
  declarations: [
    AdminComponent,
    LivraisonComponent,
    FilterLivraisonCommandePipe,
    ListeLivraisonComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
