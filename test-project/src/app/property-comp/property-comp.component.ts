import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-comp',
  template: '<h1>{{title}}</h1>',
  styleUrls: ['./property-comp.component.css']
})
export class PropertyCompComponent implements OnInit {

  title='property comp';
  constructor() { }

  ngOnInit() {
  }

}
