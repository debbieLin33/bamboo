import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from './core/ng-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
