
import { Component, OnInit, Injectable } from '@angular/core';
import { Article } from '../../shared/article';
import { ArticleService } from '../../shared/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
@Injectable()
export class BlogComponent implements OnInit {
  articles = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
    .subscribe((articles: Article[]) => {
      console.log(articles);
      this.articles = articles;
    });
  }

}