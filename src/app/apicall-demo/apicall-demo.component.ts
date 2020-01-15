import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apicall-demo',
  templateUrl: './apicall-demo.component.html',
  styleUrls: ['./apicall-demo.component.css']
})
export class APICallDemoComponent implements OnInit {

  data: any;
  frm: FormGroup;
  payload: any;
  msg: string;
  constructor(private dataService: DataService, private fmBuilder: FormBuilder) { }

  ngOnInit() {
    // this.dataService.getFromTypicode().subscribe(
    //   res=>{
    //   if(res.status===200){
    //     this.data=res.body
    //   }else{
    //     this.data='some error'
    //   }
    // }
    // )
    this.frm = this.fmBuilder.group(
      {
        title: ['', [Validators.required,this.dataService.validateTitle]],
        body: ['', Validators.required]
      }
    )

  }
  validateEmail() {
    console.log("Successfull");
  }
  submit() {
    if (this.frm.valid) {
      this.payload = this.frm.value;
      this.payload.userId = 9;
      this.dataService.sendToTypicode(this.payload).subscribe(
        res=>{
          if(res.status===201){
              this.msg=res.statusText
          }
        },
        err=>{
          this.msg="Not posted this time"
        }
      )
    }else{
      this.msg="Error";
    }
    // alert(this.frm.value);

  }
}
