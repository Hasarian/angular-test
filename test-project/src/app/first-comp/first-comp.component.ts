import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  //template: `<p>{{presentation(addition(1,2),'Romain')}}</p>`,
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
  title='this is a component';
  formIsValid=false;
  constructor() { }

  ngOnInit() {
  }
  addition(a:number,b:number){
      return a+b;
  }
  presentation(a:number,text:string)
  {
    return `${text} presents ${a}`;
  }
  /*formIsValid()
  {
    return true;
  }*/

}
