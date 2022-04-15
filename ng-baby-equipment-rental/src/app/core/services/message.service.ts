import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum messageType {
  success,
  error
} 

export interface IMessage {text: string, type: messageType}

@Injectable()
export class MessageService {
  private messageEl$ = new Subject<IMessage>();
  newMessage$ = this.messageEl$.asObservable();

  constructor() {}

  notifyForMessage(message: IMessage) {
    this.messageEl$.next(message);
  }
  
  clear(): void {
    this.messageEl$.next(undefined!);
  }
}
