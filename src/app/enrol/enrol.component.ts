import { Component, OnInit } from '@angular/core';
import { UxtrendService } from '../appService/uxtrend.service';
import { FormGroup, FormControl, Validators, FormArray, } from '@angular/forms';
// import { ADDRCONFIG } from 'dns';

@Component({
  selector: 'app-enrol',
  templateUrl: './enrol.component.html',
  styleUrls: ['./enrol.component.css']
})
export class EnrolComponent implements OnInit {
  myform:FormGroup;
  myArray:FormArray;
  cannotAllow =['keshu','k@email.com'];
  notAllowEmail =['k@gmail.com','r@gmail.com']; 
  constructor(private _msgService:UxtrendService) { }

  ngOnInit() {
    this.myform = new FormGroup({
      'name':new FormControl(null,[Validators.required,this.notAllow.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email,this.noEmail.bind(this)]),
      'hobbies':new FormArray([
        new FormControl(null,Validators.required),
        // new FormControl(null,Validators.required)
      ]),
    });
  }
  formSubmission(){
    console.log(this.myform);
  }

  onAdd(){
     const store = new FormControl(null,Validators.required);
    (<FormArray>this.myform.get('hobbies')).push(store)
  }

  notAllow(control:FormControl){
    if(this.cannotAllow.indexOf(control.value)!==-1){
      return {'ownError':true}
    }
    return null;
  }
  // for mail checking
  noEmail(control:FormControl){
    if(this.notAllowEmail.indexOf(control.value)!==-1){
      return {'noEmailFound':true}
    }
    // return null;
  }

  onButtonClick(){
     this._msgService.onAdd();
    // const myAlert = new MessageService(); //not to use this way in angular just for
    // myAlert.onAdd()

  }
}
