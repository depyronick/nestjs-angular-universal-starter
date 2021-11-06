import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TransferHttpCacheModule } from '@nguniversal/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    TransferHttpCacheModule,
    BrowserModule.withServerTransition({
      appId: 'serverApp'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
