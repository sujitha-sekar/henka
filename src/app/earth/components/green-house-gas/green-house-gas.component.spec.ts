import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenHouseGasComponent } from './green-house-gas.component';

describe('GreenHouseGasComponent', () => {
  let component: GreenHouseGasComponent;
  let fixture: ComponentFixture<GreenHouseGasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenHouseGasComponent]
    });
    fixture = TestBed.createComponent(GreenHouseGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
