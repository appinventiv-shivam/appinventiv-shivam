import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilesComponent } from './mobiles.component';
import { CART } from '../../../../constant/routes';

const routes: Routes = [
  { path: '', component: MobilesComponent },
  {
    path: CART.path,
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilesRoutingModule {}
