import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicsListComponent } from './components/physics-list/physics-list.component';
import { MaterialModule } from '../material/material.module';
import { RelativityComponent } from './components/relativity/relativity.component';
import { PropulationSystemComponent } from './components/propulation-system/propulation-system.component';



@NgModule({
  declarations: [
    PhysicsListComponent,
    RelativityComponent,
    PropulationSystemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PhysicsModule { }
