import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbosluteRoutingPipe } from './absolute-routing.pipe';



@NgModule({
  declarations: [AbosluteRoutingPipe],
  imports: [
    CommonModule
  ],
  exports:[AbosluteRoutingPipe]
})
export class AbsolutePipeModule { }
