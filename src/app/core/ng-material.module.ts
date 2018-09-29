///<reference path="../../../node_modules/@angular/platform-browser/animations/src/module.d.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatMenuModule,
    MatListModule
  ]
})
export class NgMaterialModule { }
