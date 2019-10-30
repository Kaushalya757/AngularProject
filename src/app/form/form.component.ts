import { Component, OnInit } from '@angular/core';
import { InfoService } from '../appService/info.service';
import { FormGroup,FormControl, Validators, FormArray, FormArrayName} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
allowNewServer=true;
serverCreationStatus='yes';
serverName='my serve';
serverCreated = false;
name:string='';
// -------
notAllowValue = ['keshu','ruma'];
login:FormGroup;
newArray:FormArray;
  constructor(private _textmsg :InfoService) { }

  userName(inputName:any){
    console.log(inputName);
    this.name = inputName.target.value;
  }

  onCreateServe(){
    this.serverCreated= true;
    this.serverCreationStatus = 'created' + this.serverName;
  }
  ngOnInit() {
    this.login= new FormGroup({
      'name':new FormControl(null,[Validators.required,this.noNames.bind(this)]),
      'skill':new FormArray([
        new FormControl(null,Validators.required)
      ])

    });
  }
  onSubmit(){
    console.log(this.login);
  }

  onarr(){
    // const store= new FormControl(null,Validators.required)
    (<FormArray>this.login.get('skill')).push(new FormControl(null,Validators.required))
  }
  noNames(control:FormControl){
  // console.log(control:FormControl);
    if(this.notAllowValue.indexOf(control.value)!==-1){
      return {'notAllow':true}
      }
      return null; 
    }
    // service
    onGreeting(){
      this._textmsg.onDataSubmission();
    }
}
