import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TamilModule { }
