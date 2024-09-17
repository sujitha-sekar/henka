import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ChemistryListComponent } from './components/chemistry-list/chemistry-list.component';
import { GunPowderComponent } from './components/gun-powder/gun-powder.component';



@NgModule({
  declarations: [ChemistryListComponent, GunPowderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ChemistryModule { }
