import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassCompComponent } from './ng-class-comp.component';

describe('NgClassCompComponent', () => {
  let component: NgClassCompComponent;
  let fixture: ComponentFixture<NgClassCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
