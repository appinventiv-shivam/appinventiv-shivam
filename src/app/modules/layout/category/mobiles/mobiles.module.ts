import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilesRoutingModule } from './mobiles-routing.module';
import { MobilesComponent } from './mobiles.component';
import { BreadcrumbModule } from '../../../../components/bread-crumb/breadcrumb.module';
import { MatButtonModule } from '@angular/material/button';
import { AbsolutePipeModule } from '../../../../pipes/absolute-pipe/absolute-pipe.module';


@NgModule({
  declarations: [
    MobilesComponent
  ],
  imports: [
    CommonModule,
    MobilesRoutingModule,
    BreadcrumbModule,
    MatButtonModule,
    AbsolutePipeModule
  ]
})
export class MobilesModule { }
