import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryListComponent } from './chemistry-list.component';

describe('ChemistryListComponent', () => {
  let component: ChemistryListComponent;
  let fixture: ComponentFixture<ChemistryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChemistryListComponent]
    });
    fixture = TestBed.createComponent(ChemistryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
