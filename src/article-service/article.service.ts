import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import Observable from '../rxjs/all-operators';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable()
export class ArticleService {
  private base = 'https://jsonplaceholder.typicode.com';
  constructor(private http: Http) {}
  getArticleList(): Observable<Array<Post>> {
    return this.http.get(`${this.base}/posts`).map(res => res.json());
  }
  getArticleById(id: number): Observable<Post> {
    return this.http.get(`${this.base}/posts/${id}`).map(res => res.json());
  }
}
