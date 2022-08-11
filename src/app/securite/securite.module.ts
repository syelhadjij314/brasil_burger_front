import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteRoutingModule } from './securite-routing.module';
import { SecuriteComponent } from './securite.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from '../shared/services/token-interceptor.service';
import { UserComponent } from '../user/user.component';


@NgModule({
  declarations: [
    SecuriteComponent,
    UserComponent,

  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}]

})
export class SecuriteModule { }
