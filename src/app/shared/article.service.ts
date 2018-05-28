import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) {

    }
    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>('http://localhost:3000/articles');
    }
}
