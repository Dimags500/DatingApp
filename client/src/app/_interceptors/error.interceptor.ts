import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router : Router , private tosastr : ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(

      catchError(error => {
        if(error){
          switch (error.this.state) {
            case 400:
              if(error.error.errors) {
              const modalStateErrors = [];
              for(const key in error.error.errors){
                if(error.error.errors[key]) {
                  modalStateErrors.push(error.error.errors[key])
                }
              }

              }
              break;
          
            default:
              break;
          }  
        }
        return throwError(error);
      })
    );
  }
}
