import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

myObservable;
arr=[];
msg:string='';
  constructor() { }

  ngOnInit() {
    this.myObservable=new Observable(
      observer=>{
        setTimeout(()=>
        observer.next(50)
       ,2000 )
       setTimeout(()=>
        observer.next(53)
       ,3000 )
       setTimeout(()=>
        observer.next(31)
       ,4000 )
       setTimeout(()=>
        observer.next(58)
       ,5000 )
       setTimeout(()=>
        observer.next(934)
       ,6000 )
       setTimeout(()=>
        observer.complete()
       ,7000 )
      }
    )
  }

  onButtonClick(){
    this.myObservable.pipe(
      map(data=>Number(data)*2)
    ).subscribe(
      data=>this.arr.push(data),
      err=>this.msg=err,
      ()=>this.msg='All data recieved'
    )
  }
}
