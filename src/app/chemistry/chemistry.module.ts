import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ChemistryListComponent } from './components/chemistry-list/chemistry-list.component';



@NgModule({
  declarations: [ChemistryListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ChemistryModule { }
