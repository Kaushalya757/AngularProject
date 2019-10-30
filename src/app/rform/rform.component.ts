import { Component, OnInit } from '@angular/core';
import { HttpService } from '../appService/http.service';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  msg="";
  constructor(private _httdata:HttpService) { }

  ngOnInit() {
     this.msg = this._httdata.message;
  }

}
