import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindsComponent } from './winds.component';

describe('WindsComponent', () => {
  let component: WindsComponent;
  let fixture: ComponentFixture<WindsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindsComponent]
    });
    fixture = TestBed.createComponent(WindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
