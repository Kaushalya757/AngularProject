import { Component, OnInit } from '@angular/core';
import { UxtrendService } from '../appService/uxtrend.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private _msgService:UxtrendService) { }
  products={};
  ngOnInit() {
    this.products = this._msgService.product;
  }
  dataAdd(){
    this._msgService.onAdd();
  }
  
}
