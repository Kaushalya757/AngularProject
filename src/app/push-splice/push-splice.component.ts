import { Component, OnInit } from '@angular/core';
import { HttpService } from '../appService/http.service';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent implements OnInit {
  users=[];
  httpData={};
  constructor(private _httpTwo:HttpService) { }

  ngOnInit() {
    // httpdata
    this._httpTwo.urldata ()
    .subscribe(dataTaker => this.httpData =dataTaker);
  }
  
  onCreate(uname){
    console.log(this.users);
    this.users.push({
      name:uname.value
    });
  }
  onRemove(){
    this.users.splice(this.users.length -1)
  }
  removeUser(item){
     this.users.splice(item,1)
  }
}
