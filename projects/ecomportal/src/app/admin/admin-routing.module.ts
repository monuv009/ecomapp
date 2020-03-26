import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../shared/guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';


const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [ AuthGuard, AdminGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
