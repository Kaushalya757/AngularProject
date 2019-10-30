import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  // simple sting
  message:"This is our API page";

  url="http://jsonplaceholder.typicode.com/users"
  urldata():Observable<any>{
    return this.http.get(this.url)
  }
  // secondUrl="https://api.github.com/gists/public";
    secondGitUrl():Observable<any>{
      return this.http.get("https://api.github.com/gists/public");
    }

    
}
