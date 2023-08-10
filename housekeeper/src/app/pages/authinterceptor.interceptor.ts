import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginservicService } from '../services/loginservic.service';



const TOKEN_HEADER = 'Authorization';

@Injectable()
export class AuthinterceptorInterceptor implements HttpInterceptor {

  constructor(private login: LoginservicService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    const token = this.login.getToken();

    if (token != null) {
      authReq = request.clone({
        setHeaders: { [TOKEN_HEADER]: `Bearer ${token}` },
      });
    }

    // Add the JWT token (from local storage) to the request
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorInterceptor, multi: true }
];

