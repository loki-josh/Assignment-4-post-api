import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { 
  
  }

  postUser(data:any){
    let headers = new Headers();
headers.append('Content-Type','application/json');

data= {
  
  "firstName": "string",
  "lastName": "string",
  "username": "string",
  "password": "string",
  "gender": "string"
}
    return this.http.post<any>("https://bookcart.azurewebsites.net/api/User",{Headers});
   }
   getUser(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/User");
   }


  
}
