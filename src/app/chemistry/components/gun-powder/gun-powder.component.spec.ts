import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunPowderComponent } from './gun-powder.component';

describe('GunPowderComponent', () => {
  let component: GunPowderComponent;
  let fixture: ComponentFixture<GunPowderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GunPowderComponent]
    });
    fixture = TestBed.createComponent(GunPowderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
