import { Component, OnInit } from '@angular/core';
import { UxtrendService } from '../appService/uxtrend.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // loop
  showSecret=false;
  log = [];
  uuName:string = '';
  productName={};
  onToggleDetail(){
    console.log('sdfsdfsdfds');
    console.log(this.showSecret);
    console.log(this.log);
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    // Ternary operator 
    this.uuName = this.log.length==4?'Noor':'keshu';
  }
   // loop
dynamicColor:string='Dynamic Colors';
serverId:number=10;
serverStatus:string="online";
dataload:string="overload";

  constructor(private _msgService:UxtrendService) { 
    
    var random = Math.random();
    console.log(random);
    this.serverStatus = random >0.5 ? 'online' : 'offline';
    this.dataload = random > 0.6 ? 'overload': 'lessload';
   }

  getServerStatus(){
    return this.serverStatus;
  }
  // getLoadData(){
  //   return this.dataload;
  // }

  getColor(){
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
  getLoadInfo(){
    return this.dataload === 'overload' ? 'blue' : 'pink';
  }


  ngOnInit() {
   this.productName = this._msgService.product;
  }

}


