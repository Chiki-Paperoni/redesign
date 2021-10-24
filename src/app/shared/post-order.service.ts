import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Order {
  name: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostOrderService {
  constructor(private http: HttpClient) {}
  post(text: string): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
      }),
    };
    return this.http.post<Object>('api/post', text, httpOptions);
  }
}
