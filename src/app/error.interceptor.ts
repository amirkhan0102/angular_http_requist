import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor() { }



    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = "";
                if (error.error instanceof ErrorEvent) {
                    errorMessage = `Xatolik bo'ldi ${error.error.message}`;
                } else {
                    errorMessage = `Server xatoligi: ${error.status}\n Xatolik : ${error.error}`;
                }
                console.error(errorMessage);
                return throwError(errorMessage);
            })
        )


    }
}