import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-input-comp',
  templateUrl: './input-comp.component.html',
  styleUrls: ['./input-comp.component.css']
})
export class InputCompComponent implements OnInit {

  @ViewChild("userName") userNameInput:ElementRef;
  @ViewChild("displayer") spanDisplay:ElementRef;
  @Input() name:string;
  /*

  */ 
  constructor() { }

  ngOnInit() {
  }
  display()
  {
    this.spanDisplay.nativeElement.innerHTML=this.userNameInput.nativeElement.value;
  }
}
