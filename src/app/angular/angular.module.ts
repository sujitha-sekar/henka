import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AngularListComponent } from './components/angular-list/angular-list.component';
import { AngularHistoryComponent } from './components/angular-history/angular-history.component';



@NgModule({
  declarations: [
    AngularListComponent,
    AngularHistoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AngularModule { }
