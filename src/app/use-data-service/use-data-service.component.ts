import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-use-data-service',
  templateUrl: './use-data-service.component.html',
  styleUrls: ['./use-data-service.component.css']
})
export class UseDataServiceComponent implements OnInit {

  un:string='';
  uname:string='';
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
  setUserName(){
    this.dataService.setUserName(this.un);
  }
  getUserName(){
    this.uname= this.dataService.getUserName();
  }
}
