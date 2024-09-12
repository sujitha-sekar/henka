import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularListComponent } from './angular-list.component';

describe('AngularListComponent', () => {
  let component: AngularListComponent;
  let fixture: ComponentFixture<AngularListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularListComponent]
    });
    fixture = TestBed.createComponent(AngularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
