import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import Observable from '../rxjs/all-operators';


@Injectable()
export class ArticleService {
  private base = 'http://jsonplaceholder.typicode.com';
  constructor(private http: Http) { }
  getArticleList(): Observable<any> {
    return this.http.get(`${this.base}/posts`)
            .map(res => res.json());
  }
  getArticleById(id: number): Observable<any> {
    return this.http.get(`${this.base}/posts/${id}`)
            .map(res => res.json());

  }
}
