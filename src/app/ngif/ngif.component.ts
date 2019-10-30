import { Component, OnInit, ɵEMPTY_MAP } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  selectedCountry:string;
  countries:any[]= [
    {code:'IND',country:'India'},
    {code:'UAE',country:'Unite Arab Emirate'},
    {code:'UK',country:'United kingdom'}
  ];

  choice(code){
    console.log(code);
    this.selectedCountry = code; 
  }

  isUserLogginedIn:boolean = false;
  enterName=true;
  pinCodeChd='+91';
  forOption='';
  serverName='Connect';
  // ngswitch case
  

  // users:string[] = ["emma","lucy","jenny"];
  users:any[]= [
    {id:101,name:'laxi',city:'chd'},
    {id:101,name:'lucy',city:'pune'},
    {id:101,name:'jenny',city:'kashmir'}
  ];

  details:any;
    
  Title:string='Http service';
// constructor basicly use for dependency injection
  constructor(private userService:UsersService) { 

  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data)=>{
      this.details = data;
    });
  }

}
