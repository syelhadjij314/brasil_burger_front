import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './produit-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AsideComponent } from './components/aside/aside.component';
import { CardComponent } from './components/card/card.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ComplementComponent } from './components/complement/complement.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { BrasilBurgerComponent } from './pages/brasil-burger/brasil-burger.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    AsideComponent,
    CardComponent,
    CatalogueComponent,
    ComplementComponent,
    InputComponent,
    BrasilBurgerComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    LayoutModule,
    RouterModule,
    FormsModule,
  ],
})
export class ProduitModule { }
