import { Component, OnInit } from '@angular/core';
import { InfoService } from '../appService/info.service';
import { FormControl, FormGroup, Validators, FormArray} from '@angular/forms'
@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  Gender :['male','female']
  myForm: FormGroup;
  skills:FormArray;
  msg='';
  constructor(private _textmsg:InfoService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl('male'),
      'skills': new FormArray([
        new FormControl(null,Validators.required)
      ])
    });

    this.msg=this._textmsg.thanksMsg;
  }
  formSubmission(){
    console.log(this.myForm);
  }
  onAdd(){
    // console.log();
    const store=new FormControl(null,Validators.required);
    (<FormArray>this.myForm.get('skills')).push(store)
  }
}
