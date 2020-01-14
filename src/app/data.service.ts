import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userName='';

  constructor() { }

  setUserName(nm:string){
    this.userName=nm.trim().toUpperCase();
  }
  getUserName(){
    return this.userName;
  }
}
