import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API URL
  private apiUrl = 'http://localhost:8081/api/books';

  constructor(private httpClient: HttpClient) { }

  getBooks():Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
