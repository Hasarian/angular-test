import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-comp',
  templateUrl: './event-comp.component.html',
  styleUrls: ['./event-comp.component.css']
})
export class EventCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  somethingIsHappening()
  {
      alert("something is happening !");
  }
  somethingElseIsHappening()
  {
    alert("fly!");
  }
}
