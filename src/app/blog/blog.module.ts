import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AsideComponent } from './components/aside/aside.component';
import { CardComponent } from './components/card/card.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CommandesComponent } from './pages/commandes/commandes.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    AsideComponent,
    CardComponent,
    CatalogueComponent,
    CommandesComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    LayoutModule,
    RouterModule,
  ]
})
export class BlogModule { }