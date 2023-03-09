import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] =[];
 
  

  constructor() { }

  addMessageService(message: string): void {
    this.messages.push(message);


  }
  clear(){
    this.messages = [];
  }
}