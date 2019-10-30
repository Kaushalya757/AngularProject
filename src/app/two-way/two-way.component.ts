import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  // ngif with radio
  isValid:boolean=true;
  changeValue(valid){
    this.isValid=valid;
  }
  // ngif with radio
  comment:boolean=true;
  add(statement){
    this.comment=statement;
  }
  // ngfor
  nameid=337;
  ngFormData:any[]=[
    {name:'Satish',class:'3th',roll:20, address:'#219 chd'},
    {name:'vishal',class:'MSC',roll:4 , address:'#1134 chd'},
    {name:'Ankush',class:'B.tech',roll:33, address:'#1140 chd'},
    {name:'Narnia',class:'7th',roll:45, address:'#13 chd'}
  ];
  mycheck:boolean=true;
  login:boolean=true;
  condition:boolean=false;
    myData='My Angular File';
    name:string='Way from here';
    success='';
    mobile='';
    // allToApper:boolean=false;
    onNumber(fnumber:any){
      this.mobile=fnumber.target.value;
    }
    formMsg='';
    onDataSubmit(){
      this.formMsg='Your form submitted successfully';
    }
    // property bind
    apper=true;
    valueShow:boolean=false;
    link='https://console.firebase.google.com';
    // property bind
    submit='';
    addData='';
    onclick(){
      console.log(name);
      this.name='Welcom portal is open for you';
    }

    onsubmit(form :any){
      console.log(form);
      this.submit=form.target.value;
    }

    submitdata(){
      this.addData='Your record is save ';
    }

    commend(){
      this.success='Accept';
    }
    // take time to able
    dynamicdata:boolean=false;
    dataStatus:string='create record';
    
  constructor() { 
    setTimeout(() => {
        this.dynamicdata = true;
    },2000);
   }

  ngOnInit() {
  }
  whenclicked(){
    this.dataStatus='Enable to create';

  }
}
