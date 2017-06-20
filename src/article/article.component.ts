import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import Observable from '../rxjs/all-operators';
import {ArticleService} from '../article-service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  private id: number;
  private article: any;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.article = this.route.params
      .do((params: Params) => this.id = +params['id'])
      .switchMap((params: Params) => {
        return this.articleService.getArticleById(params['id'])
      }).share();
  }

}
