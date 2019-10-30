import { Component, OnInit } from '@angular/core';
  import { UxtrendService } from '../appService/uxtrend.service';
@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private _msgService:UxtrendService) { }
  products={};
  ngOnInit() {
    this.products = this._msgService.product;
  }
  onButtonClick(){
    this._msgService.onAdd();
    // const msgService = new MessageService();//not to use this way in angular just for understanding
    // msgService.onAdd()
  }
}
