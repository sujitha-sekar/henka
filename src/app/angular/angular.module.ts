import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AngularListComponent } from './components/angular-list/angular-list.component';
import { AngularHistoryComponent } from './components/angular-history/angular-history.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { MergeSwitchMapsComponent } from './components/merge-switch-maps/merge-switch-maps.component';



@NgModule({
  declarations: [
    AngularListComponent,
    AngularHistoryComponent,
    ViewEncapsulationComponent,
    MergeSwitchMapsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AngularModule { }
