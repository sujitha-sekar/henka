import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropulationSystemComponent } from './propulation-system.component';

describe('PropulationSystemComponent', () => {
  let component: PropulationSystemComponent;
  let fixture: ComponentFixture<PropulationSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropulationSystemComponent]
    });
    fixture = TestBed.createComponent(PropulationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
