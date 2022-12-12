import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {MatIconModule} from '@angular/material/icon';
import { AbsolutePipeModule } from '../../pipes/absolute-pipe/absolute-pipe.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule,
    AbsolutePipeModule
  ]
})
export class LayoutModule {
  constructor(){
    console.log("jo");

  }
 }
