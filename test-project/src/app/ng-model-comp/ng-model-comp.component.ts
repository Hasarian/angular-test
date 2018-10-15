import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-comp',
  templateUrl: './ng-model-comp.component.html',
  styleUrls: ['./ng-model-comp.component.css']
})
export class NgModelCompComponent implements OnInit {
  user:User;
  constructor() { }

  ngOnInit() {
  }
  updateName(event)
  {
    this.user.name=event.target.value;
  }
}
