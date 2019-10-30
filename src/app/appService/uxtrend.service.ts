import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UxtrendService {

  constructor() { }
  onAdd(){
    alert("Thanks for your subscribe.soon we are connected with you"); //not to use this way in angular just for understanding
  }

  product=
   [
    {name:"service",id:"0051"},
    {name:"water",id:"0052"},
    {name:"transport",id:"0053"},
    {name:"gaspipeline",id:"0054"}
  ]
  //{name:"service,facility",id:'0051ddsfdsfdfds'}
}
