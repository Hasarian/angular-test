import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ng-class-comp',
  templateUrl: './ng-class-comp.component.html',
  styleUrls: ['./ng-class-comp.component.css']
})
export class NgClassCompComponent implements OnInit {
  currentStyles={};
  canSave:boolean;
  isUnchanged:boolean;
  isSpecial:boolean;
  constructor() { }

  ngOnInit() {
    this.canSave=true;
    this.isUnchanged=true;
    this.isSpecial=true;
  }

  setCurrentClass(){
    this.currentStyles=
    {
      'font-style': this.canSave     ? 'italic':'normal',
      'font-weight':this.isUnchanged ? 'bold':'normal',
      'font-size':this.isSpecial       ? '24px':'12px'
    };
  }
  toggleSave(){
    this.canSave=!this.canSave
    this.setCurrentClass();
  }
  toggleChange(){
    this.isUnchanged=!this.isUnchanged
    this.setCurrentClass()
  }
  toggleSpecial(){
    this.isSpecial=!this.isSpecial
    this.setCurrentClass()
  }
  

}
