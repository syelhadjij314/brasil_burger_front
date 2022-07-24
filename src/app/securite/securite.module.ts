import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteRoutingModule } from './securite-routing.module';
import { SecuriteComponent } from './securite.component';


@NgModule({
  declarations: [
    SecuriteComponent
  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule
  ]
})
export class SecuriteModule { }
