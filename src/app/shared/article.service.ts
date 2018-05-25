import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {
    constructor(private http: Http) {

    }
    getArticle() {
        return this.http.get('http://localhost:3000/articles')
            .map(function (articles){
                return articles.json();
            });
    }
}
