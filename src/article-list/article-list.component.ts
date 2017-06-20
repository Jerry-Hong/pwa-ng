import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article-service/article.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {
  private articleList;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleList = this.articleService.getArticleList()

  }

}
