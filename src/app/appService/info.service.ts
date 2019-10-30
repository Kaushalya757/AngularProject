import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
 thanksMsg="Thanks for your help";

  onDataSubmission(){
    alert("Welcome! we are thankfull to you are here to give your contribution ");
  }
}
