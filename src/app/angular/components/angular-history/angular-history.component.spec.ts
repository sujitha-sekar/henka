import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHistoryComponent } from './angular-history.component';

describe('AngularHistoryComponent', () => {
  let component: AngularHistoryComponent;
  let fixture: ComponentFixture<AngularHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularHistoryComponent]
    });
    fixture = TestBed.createComponent(AngularHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
