import { Component, OnInit } from '@angular/core';
import { HttpService } from '../appService/http.service';

@Component({
  selector: 'app-httpdata',
  templateUrl: './httpdata.component.html',
  styleUrls: ['./httpdata.component.css']
})
export class HttpdataComponent implements OnInit {
  fetchHttp={};
  pageMsg='';
  constructor(private _gethttp:HttpService) { }

  ngOnInit() {
    this._gethttp.urldata()
    .subscribe(urlGetData => this.fetchHttp = urlGetData)
    
  this.pageMsg = this._gethttp.message;
  // this.msg=this._textmsg.thanksMsg;
  }


}
