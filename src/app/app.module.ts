import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { EarthModule } from './earth/earth.module';
import { PhysicsModule } from './physics/physics.module';
import { TechnologyModule } from './technology/technology.module';
import { AngularModule } from './angular/angular.module';
import { ChemistryModule } from './chemistry/chemistry.module';
import { TamilModule } from './tamil/tamil.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    EarthModule,
    PhysicsModule,
    TechnologyModule,
    AngularModule,
    ChemistryModule,
    TamilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
