import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessagesService } from './messages.service';
import { contentDb } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class MyFavouriteSportsService {
  sportsHero(updatedContent: Content) {
    
    throw new Error('Method not implemented.');
  }
  getSports() {
    throw new Error('Method not implemented.');
  }
  getSportsById(idNumber: number) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http: HttpClient) {}

	private httpOptions = {
		headers: new HttpHeaders({ 'Content-type': 'application/json' }),
	};
  
  getContent() {

    return  this.http.get<Content[]>('api/Content');
  }
  getContentById(id: number) {

    return  this.http.get<Content[]>('api/Content/'+id);
  }
  updateSports(content:any) {
    return this.http.put(`/api/Content/${content.id}`, content);
  }
  addcontent(content:any) {
  
    return this.http.post('/api/Content', content);
  }
}

