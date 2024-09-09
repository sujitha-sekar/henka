import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsListComponent } from './physics-list.component';

describe('PhysicsListComponent', () => {
  let component: PhysicsListComponent;
  let fixture: ComponentFixture<PhysicsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicsListComponent]
    });
    fixture = TestBed.createComponent(PhysicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
