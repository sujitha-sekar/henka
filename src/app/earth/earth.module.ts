import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EarthListComponent } from './components/earth-list/earth-list.component';



@NgModule({
  declarations: [
    EarthListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class EarthModule { }
