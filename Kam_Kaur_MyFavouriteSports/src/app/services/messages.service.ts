import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  addMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
 

  private messages = new Subject<string>();
  messages$ = this.messages.asObservable();
 
  

  constructor() { }

  addMessageService(message: string): void {
    this.messages.next(message);


  }

}