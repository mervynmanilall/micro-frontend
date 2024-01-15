import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MfeAppComponent } from './app.component';

@NgModule({
  declarations: [
    MfeAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MfeAppComponent]
})
export class AppModule { }
