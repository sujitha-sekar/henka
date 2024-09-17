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
import { TechListComponent } from './technology/components/tech-list/tech-list.component';
import { AngularListComponent } from './angular/components/angular-list/angular-list.component';
import { AngularHistoryComponent } from './angular/components/angular-history/angular-history.component';
import { ViewEncapsulationComponent } from './angular/components/view-encapsulation/view-encapsulation.component';
import { MergeSwitchMapsComponent } from './angular/components/merge-switch-maps/merge-switch-maps.component';
import { AsyncPipeComponent } from './angular/components/async-pipe/async-pipe.component';
import { GunPowderComponent } from './physics/components/gun-powder/gun-powder.component';
import { ChemistryListComponent } from './chemistry/components/chemistry-list/chemistry-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/home', pathMatch: 'full'}, 
  { path: 'app', component: DashboardComponent, children: [
    { path: 'home', component: HomeComponent },
    { path : 'earth', component: EarthListComponent },
    { path : 'winds', component: WindsComponent },
    { path : 'green-house-gas', component: GreenHouseGasComponent },
    { path : 'methane', component: MethaneComponent },
    { path : 'physics', component: PhysicsListComponent },
    { path : 'relativity', component: RelativityComponent },
    { path : 'technology', component: TechListComponent },
    { path : 'angular-history', component: AngularHistoryComponent },
    { path : 'angular', component: AngularListComponent },
    { path : 'view-encapsulation', component: ViewEncapsulationComponent },
    { path : 'merge-vs-switch', component: MergeSwitchMapsComponent },
    { path : 'async-pipe', component: AsyncPipeComponent },
    { path : 'chemistry', component: ChemistryListComponent },
    { path : 'gun-powder', component: GunPowderComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
