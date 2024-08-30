import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EarthListComponent } from './components/earth-list/earth-list.component';
import { WindsComponent } from './components/winds/winds.component';



@NgModule({
  declarations: [
    EarthListComponent,
    WindsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class EarthModule { }
