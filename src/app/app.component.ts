import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8-Demo2';
 name ="Hitasvi Sutar";
 count:number=0;

 getCount(ct){
   this.count=ct;
 }
 sum(a,b){
   let c=a+b;
   return c;
 }
}
