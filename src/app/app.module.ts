import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './client/common/main-layout/main-layout.component';
import {MainPageComponent} from './client/main-page/main-page.component';
import {ProductPageComponent} from './client/product-page/product-page.component';
import {CartPageComponent} from './client/cart-page/cart-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";
import {AuthInterseptor} from "./admin/common/auth.interseptor";
import {ProductComponent} from "./client/product/product.component";
import { SortingPipe } from './client/common/sorting.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ProductComponent,
    SortingPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        QuillModule,
        ReactiveFormsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterseptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
