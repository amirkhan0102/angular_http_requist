import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  regiter(username:string , password:string){
    return this.http.post<any>('https://jsonplaceholder.typicode.com/users' ,{username , password});
  }


  login(username:string , password:string){
     return this.http.get<any>('https://jsonplaceholder.typicode.com/users/?users?username=' + username + '&password='+ password);
  }



}
