import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages = new Subject<string>();
  messages$ = this.messages.asObservable();
 
  

  constructor() { }

  addMessageService(message: string): void {
    this.messages.next(message);


  }

}