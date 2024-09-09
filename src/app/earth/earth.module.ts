import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EarthListComponent } from './components/earth-list/earth-list.component';
import { WindsComponent } from './components/winds/winds.component';
import { GreenHouseGasComponent } from './components/green-house-gas/green-house-gas.component';
import { MethaneComponent } from './components/methane/methane.component';



@NgModule({
  declarations: [
    EarthListComponent,
    WindsComponent,
    GreenHouseGasComponent,
    MethaneComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class EarthModule { }
