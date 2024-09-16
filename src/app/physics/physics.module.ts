import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicsListComponent } from './components/physics-list/physics-list.component';
import { MaterialModule } from '../material/material.module';
import { RelativityComponent } from './components/relativity/relativity.component';
import { GunPowderComponent } from './components/gun-powder/gun-powder.component';



@NgModule({
  declarations: [
    PhysicsListComponent,
    RelativityComponent,
    GunPowderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PhysicsModule { }
