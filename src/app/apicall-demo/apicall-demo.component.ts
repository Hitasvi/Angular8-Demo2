import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-apicall-demo',
  templateUrl: './apicall-demo.component.html',
  styleUrls: ['./apicall-demo.component.css']
})
export class APICallDemoComponent implements OnInit {

  data:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getFromTypicode().subscribe(
      res=>{
      if(res.status===200){
        this.data=res.body
      }else{
        this.data='some error'
      }
    }
    )
  }

}
