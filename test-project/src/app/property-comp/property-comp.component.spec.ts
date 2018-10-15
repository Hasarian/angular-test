import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCompComponent } from './property-comp.component';

describe('PropertyCompComponent', () => {
  let component: PropertyCompComponent;
  let fixture: ComponentFixture<PropertyCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
