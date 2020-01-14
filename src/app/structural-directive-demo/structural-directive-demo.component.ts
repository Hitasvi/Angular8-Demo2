import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-demo',
  templateUrl: './structural-directive-demo.component.html',
  styleUrls: ['./structural-directive-demo.component.css']
})
export class StructuralDirectiveDemoComponent implements OnInit {

  //countries = ['India', 'China', 'Japan', 'USA'];
  countries=[
    {name:"India", code:"in",population:"1000"},
    {name:"China", code:"ch",population:"2000"},
    {name:"USA", code:"us",population:"800"}
  ];
  country: string = 'in';
  constructor() { }

  ngOnInit() {
  }
  countryChange(event) {
    this.country = event.target.value;
  }
refresh(){

 this.countries=[
    {name:"India", code:"in",population:"1000"},
    {name:"China", code:"ch",population:"2000"},
    {name:"USA", code:"us",population:"800"},
    {name:"Japan", code:"ja",population:"700"}
  ];
}

trackByCode(index,item:{code:string,name:string,population:string}){
  item.name=item.name.toLocaleUpperCase();
  return item.code;
}
}
