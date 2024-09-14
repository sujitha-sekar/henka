import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSwitchMapsComponent } from './merge-switch-maps.component';

describe('MergeSwitchMapsComponent', () => {
  let component: MergeSwitchMapsComponent;
  let fixture: ComponentFixture<MergeSwitchMapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MergeSwitchMapsComponent]
    });
    fixture = TestBed.createComponent(MergeSwitchMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
