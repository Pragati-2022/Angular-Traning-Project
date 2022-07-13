import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringMethodsComponent } from './string-methods.component';

describe('StringMethodsComponent', () => {
  let component: StringMethodsComponent;
  let fixture: ComponentFixture<StringMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
