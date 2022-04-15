import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MessageService, messageType } from './services/message.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private message: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      this.message.notifyForMessage({
        text: err?.error?.message || "Something went wrong!",
        type: messageType.error
      })
      return throwError(() => err);
    }));
  }
}
