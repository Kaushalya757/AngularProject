import { Component, OnInit } from '@angular/core';
import { HttpxService } from '../appService/httpx.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  Name='Second Angular File';
  Connection:string='server';
  idNumber:number=10;
  img:string="assets/img/5.jpeg";
  valueShow:boolean=true;
  Link:string='https://www.google.com';
  student:string="Name";
  wellmsg="";
  constructor(private _bindhttp:HttpxService) { }

  mydata(){
    this.Name='My angular File';
  }
  chengeId(){
    this.idNumber=12;
  }

  ngOnInit() {
  // welcome="your are here to work with us";
  this.wellmsg = this._bindhttp.welcome;
  }

}
