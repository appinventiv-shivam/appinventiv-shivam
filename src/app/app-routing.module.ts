import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LAYOUT, ACCOUNT } from './constant/routes';

const routes: Routes = [
  { path: '', redirectTo: ACCOUNT.path, pathMatch: 'full' },
  {
    path: ACCOUNT.path,
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: LAYOUT.path,
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '***', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
