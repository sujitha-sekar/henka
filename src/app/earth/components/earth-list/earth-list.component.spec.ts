import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthListComponent } from './earth-list.component';

describe('EarthListComponent', () => {
  let component: EarthListComponent;
  let fixture: ComponentFixture<EarthListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarthListComponent]
    });
    fixture = TestBed.createComponent(EarthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
