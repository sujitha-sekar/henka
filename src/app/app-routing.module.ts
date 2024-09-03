import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { HomeComponent } from './core/components/home/home.component';
import { EarthListComponent } from './earth/components/earth-list/earth-list.component';
import { WindsComponent } from './earth/components/winds/winds.component';
import { GreenHouseGasComponent } from './earth/components/green-house-gas/green-house-gas.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'}, 
  { path: 'app', component: DashboardComponent, children: [
    { path: 'home', component: HomeComponent },
    { path : 'earth', component: EarthListComponent },
    { path : 'winds', component: WindsComponent },
    { path : 'green-house-gas', component: GreenHouseGasComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
