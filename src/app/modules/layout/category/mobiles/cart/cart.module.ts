import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { BreadcrumbModule } from '../../../../../components/bread-crumb/breadcrumb.module';
import { MatButtonModule } from '@angular/material/button';
import { AbsolutePipeModule } from '../../../../../pipes/absolute-pipe/absolute-pipe.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    BreadcrumbModule,
    MatButtonModule,
    AbsolutePipeModule
  ]
})
export class CartModule { }
