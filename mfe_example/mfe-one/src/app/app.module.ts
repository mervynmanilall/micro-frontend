import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MyFirstMfeAppComponent } from './app.component';

@NgModule({
  declarations: [
    MyFirstMfeAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MyFirstMfeAppComponent]
})
export class AppModule { }
