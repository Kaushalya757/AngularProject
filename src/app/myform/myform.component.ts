import { Component, OnInit } from '@angular/core';
import { InfoService } from '../appService/Info.Service';
import { FormControl,FormGroup, Validators,} from '@angular/forms';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  myLogin:FormGroup;
  msg='';
  //  gender='male','female';
  constructor(private _textmsg:InfoService) { }

  ngOnInit() {
    this.myLogin = new FormGroup({
      'userName':new FormControl(null,Validators.required),
      'email':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
      'gender':new FormControl(null,Validators.required)
  })

  this.msg = this._textmsg.thanksMsg;
}
  onSubmit(){
    console.log('sdfsdf');
    console.log(this.myLogin.value.email);
    console.log(this.myLogin);
    // console.log('text');
  }
  onData(){
    this._textmsg.onDataSubmission();
  }

}
