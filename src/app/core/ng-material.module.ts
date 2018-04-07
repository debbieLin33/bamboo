import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:[
  	MatSidenavModule,
  	BrowserAnimationsModule,
  	MatToolbarModule,
  	MatIconModule,
  	MatButtonModule,
  	MatButtonToggleModule,
  	MatRippleModule
  ]
})
export class NgMaterialModule { }
