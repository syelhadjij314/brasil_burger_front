import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PanierComponent } from '../produit/panier/panier.component';
import { CardPanierComponent } from '../produit/components/card-panier/card-panier.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PanierComponent,
    CardPanierComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,

  ],
})
export class LayoutModule { }
