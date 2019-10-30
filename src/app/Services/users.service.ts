import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  onAdd(){
    alert("Thanks for your subscribe.");
  }
  constructor(private http:HttpClient) { }
  getAllUsers(){
    return this.http.get("http://jsonplaceholder.typicode.com/users");
    // return[
      // .http.get("https://jsonplaceholder.typicode.com/users");
    //   {id:'101',Name:'emma',City:'Delhi',Salary:'20k'},
    //   {id:'102',Name:'mona',City:'chandigarh',Salary:'10k'},
    //   {id:'103',Name:'kayra',City:'kanpur',Salary:'40k'},
    //   {id:'104',Name:'dolma',City:'madipur',Salary:'30k'},
    // ];

    
  }
}
