import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { BreadcrumbModule } from '../../../components/bread-crumb/breadcrumb.module';
import { AbsolutePipeModule } from '../../../pipes/absolute-pipe/absolute-pipe.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    BreadcrumbModule,
    AbsolutePipeModule,
    MatButtonModule
  ]
})
export class CategoryModule { }
