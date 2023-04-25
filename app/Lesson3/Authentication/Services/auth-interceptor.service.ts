import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private srv: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req;
    let tokenData = this.srv.getToken();
    //ניסיון להשתמש ב token מיד ולא לגשת לסרוויס
    // let tokenData = req.body.data.token;
    if (tokenData != null) {
      newReq = req.clone({ headers: req.headers.set('x-access-token', tokenData) });
    }

    return next.handle(newReq);
  }
}
