import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  title="Data Binding Component";
  flag=false;
  count=0;
  
  @Input() userName;
  @Output() countChange:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnClick(){
    this.title="Title Changed..";
    this.count++;
this.countChange.emit(this.count);
    // this.flag=true;
  }
}
