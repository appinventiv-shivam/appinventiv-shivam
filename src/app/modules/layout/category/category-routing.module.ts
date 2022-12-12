import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { MOBILE } from '../../../constant/routes';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  {
    path: MOBILE.path,
    loadChildren: () =>
      import('./mobiles/mobiles.module').then((m) => m.MobilesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
