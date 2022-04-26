import { Component, Input } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Article, ArticleListConfig, ArticlesService } from '../../core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-list',
  styleUrls: ['article-list.component.css'],
  templateUrl: './article-list.component.html'
})


export class ArticleListComponent {
  constructor (
    private articlesService: ArticlesService
  ) {}

  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }



  searchFilter: string;
  query: ArticleListConfig;
  results: Article[];
  articles : Article[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  filter(){
    const articles : Article[] = []
    const article$ = from(this.articles)
    const searchArticle$ = article$.pipe(
      filter(article => article.title.search(this.searchFilter) != -1 )
    )
    searchArticle$.subscribe(
      article => articles.push(article)
    )
    this.results = articles

  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    }

    this.articlesService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.articles = data.articles
      this.results = data.articles

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
    });
  }
}
