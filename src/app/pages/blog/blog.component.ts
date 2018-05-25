import { Component, OnInit, Injectable } from '@angular/core';
import { ArticleService } from '../../shared/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

}
