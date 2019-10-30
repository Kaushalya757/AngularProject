import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-angular-reactive',
  templateUrl: './angular-reactive.component.html',
  styleUrls: ['./angular-reactive.component.css']
})
export class AngularReactiveComponent implements OnInit {
gender:['male','female']
formSignup: FormGroup;
arr:FormArray;
  constructor() { }

  ngOnInit() {
    this.formSignup = new FormGroup({
      'userDatails':new FormGroup({
        'name':new FormControl(null,Validators.required),
        'Address':new FormControl(null,Validators.required),
      }),
      'course':new FormControl(null,Validators.required),
      'email':new FormControl(null,Validators.required),
      'gender':new FormControl(null,Validators.required),
      'hobbies': new FormArray([
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required)
      ])
    });
  }
  onFromSubmit(){
    console.log(this.formSignup);
  }

  onArray(){
    (<FormArray>this.formSignup.get('hobbies')).push(new FormControl(null,Validators.required))
  }
}
