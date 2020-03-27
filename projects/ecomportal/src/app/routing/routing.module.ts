import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminGuard } from '../shared/guard/admin.guard';
import { UserGuard } from '../shared/guard/user.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule', canLoad: [AdminGuard] },
      { path: 'user', loadChildren: '../user/user.module#UserModule', canLoad: [UserGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
