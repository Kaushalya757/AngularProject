import { Component, OnInit } from '@angular/core';
import { HttpService } from '../appService/http.service';

@Component({
  selector: 'app-pagelink',
  templateUrl: './pagelink.component.html',
  styleUrls: ['./pagelink.component.css']
})
export class PagelinkComponent implements OnInit {
  httpData={};
  successmsg='';
  constructor(private _httpTwo:HttpService) { }

  ngOnInit() {
    this._httpTwo.urldata ()
    .subscribe(dataTaker => this.httpData =dataTaker);

    // this.successmsg = this._httpTwo.message;
  }
}