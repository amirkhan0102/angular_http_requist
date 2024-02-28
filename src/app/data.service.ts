import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts/1'

  getData(): Observable<any> {
    return this.http.get<any>(this.url)
    .pipe(
      catchError(this.handleError)
    )
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.url, postData)
  }


  deletePost(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete<any>(url);
  }


  updatePost(id: number, postData: any): Observable<any> {

    const url = `${this.url}/ ${id}`;
    return this.http.put<any>(url, postData);

  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("Xato bo'ldi", error.error.message);
    }
    else {
      console.error("Serverda xatolik bo'ldi", `${error.status}` + `Xabar ${error.error}`);
    }

return throwError("Xatolik ro'y berdi qaytadan urinib ko'ring")

  }




}
