import { Component, OnInit } from '@angular/core';
import { HttpService } from '../appService/http.service';
import { Subscriber } from 'rxjs';
// import { read } from 'fs';

@Component({
  selector: 'app-ng-switch',
  templateUrl:'./ng-switch.component.html', 
  
  
  // styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  // dynamic color
  secondpage={};
  capacity:string='showwork';
  myeve(){
    //console.log(capacity);
    this.capacity='Event work' ;
  }
  constructor(private _SecondCompile: HttpService) { 
  }

  ngOnInit() {
    this._SecondCompile.secondGitUrl()
      .subscribe(ruma =>this.secondpage=ruma) ;
    
  }

}
