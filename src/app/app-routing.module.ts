import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'}, 
  { path: 'app', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
