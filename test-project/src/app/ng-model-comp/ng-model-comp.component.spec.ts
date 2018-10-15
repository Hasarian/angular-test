import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelCompComponent } from './ng-model-comp.component';

describe('NgModelCompComponent', () => {
  let component: NgModelCompComponent;
  let fixture: ComponentFixture<NgModelCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
