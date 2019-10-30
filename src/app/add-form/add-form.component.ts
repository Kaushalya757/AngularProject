import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  employee:FormGroup;
  notAllowValue=['keshu','vishal'];
  constructor() { }

  ngOnInit() {
    this.employee = new FormGroup({
      'fullname':new FormControl(null,[Validators.required,this.noValue.bind(this)]),
                                      //  [Validators.required,this.notAllow.bind(this)]
      'email':new FormControl(null,Validators.required),
     'userkDetails': new FormGroup({
      'skillname':new FormControl(null,Validators.required),
      'experience':new FormControl(null,Validators.required),
    }),
      'otherdata':new FormArray([
        new FormControl(null,Validators.required),
        // new FormControl(null,Validators.required),
      ]),
    });
  }
  onSubmit(){
    console.log(this.employee.value.userkDetails);
    console.log();
    const data = this.employee.value.otherdata;
    const i = 0;
    var log = [];
    data.forEach(function (item) {
      console.log(item);
    })
  }

  onAdd(){
    // const store = new FormControl(null,Validators.required),
    (<FormArray>this.employee.get('otherdata')).push(new FormControl(null,Validators.required));
  }

  noValue(control:FormControl){
    if(this.notAllowValue.indexOf(control.value)!==-1){
      return {'errormsg':true}
    }
    return null;
  }
}
