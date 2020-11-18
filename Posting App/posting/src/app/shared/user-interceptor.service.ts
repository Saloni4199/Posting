import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { PostingService } from './posting.service';
@Injectable({
  providedIn: 'root'
})
export class UserInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(req, next) {
    const postingService = this.injector.get(PostingService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer  ${postingService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }

}


