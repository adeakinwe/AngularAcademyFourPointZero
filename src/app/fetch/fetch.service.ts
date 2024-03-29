import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  /*
    HTTP VERBS
    GET, POST, PUT, DELETE, PATCH, OPTION
  */

private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAllComment(): Observable<any>{
    return this.http.get(`${this.baseUrl}/comments`);
  }

  getAllPosts(): Observable<any>{
    return this.http.get(`${this.baseUrl}/posts`)
  }
}
