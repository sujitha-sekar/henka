import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativityComponent } from './relativity.component';

describe('RelativityComponent', () => {
  let component: RelativityComponent;
  let fixture: ComponentFixture<RelativityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelativityComponent]
    });
    fixture = TestBed.createComponent(RelativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
