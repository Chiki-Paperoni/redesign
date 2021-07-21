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

  postOrder(order: Order): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Object>(
      'api/post',
      JSON.stringify(order),
      httpOptions
    );
  }
  postBrief(brief: string): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
      }),
    };
    return this.http.post<Object>('api/briefs', brief, httpOptions);
  }
}
