import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { AbsolutePipeModule } from '../../../pipes/absolute-pipe/absolute-pipe.module';
import { DashboardService } from './service/dashboard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    AbsolutePipeModule,
    HttpClientModule,
  ],
  providers:[DashboardService]
})
export class DashboardModule { }
