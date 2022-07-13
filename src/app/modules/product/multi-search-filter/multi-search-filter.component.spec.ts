import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSearchFilterComponent } from './multi-search-filter.component';

describe('MultiSearchFilterComponent', () => {
  let component: MultiSearchFilterComponent;
  let fixture: ComponentFixture<MultiSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
