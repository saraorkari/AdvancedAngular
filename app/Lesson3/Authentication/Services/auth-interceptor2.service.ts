import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor2Service implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req;
    console.log("interceptor");
    if (req.method == "GET") {
      newReq = req.clone({ url: req.url.replace('http://', 'https://') });
    }
    return next.handle(newReq);
  }
}
