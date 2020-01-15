import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userName='';
  url='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

getFromTypicode(){
  return this.http.get(this.url,{observe:'response'});
}

  setUserName(nm:string){
    this.userName=nm.trim().toUpperCase();
  }
  getUserName(){
    return this.userName;
  }
}
