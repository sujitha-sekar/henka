import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { HomeComponent } from './core/components/home/home.component';
import { EarthListComponent } from './earth/components/earth-list/earth-list.component';
import { WindsComponent } from './earth/components/winds/winds.component';
import { GreenHouseGasComponent } from './earth/components/green-house-gas/green-house-gas.component';
import { MethaneComponent } from './earth/components/methane/methane.component';
import { PhysicsListComponent } from './physics/components/physics-list/physics-list.component';
import { RelativityComponent } from './physics/components/relativity/relativity.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'}, 
  { path: 'app', component: DashboardComponent, children: [
    { path: 'home', component: HomeComponent },
    { path : 'earth', component: EarthListComponent },
    { path : 'winds', component: WindsComponent },
    { path : 'green-house-gas', component: GreenHouseGasComponent },
    { path : 'methane', component: MethaneComponent },
    { path : 'physics', component: PhysicsListComponent },
    { path : 'relativity', component: RelativityComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
