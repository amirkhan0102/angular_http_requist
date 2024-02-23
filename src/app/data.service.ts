import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 
  constructor(private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts'

  getData(): Observable<any> {
    return this.http.get<any>(this.url)
  }

createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.url, postData)
  }


deletePost(id:number):Observable<any>{
  const url=`${this.url}/${id}`;
  return this.http.delete<any>(url);
}

  
  updatePost(id: number, postData: any): Observable<any> {
  
    const url =`${this.url}/ ${id}`;
    return this.http.put<any>(url, postData);

  }


 



}
