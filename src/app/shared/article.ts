
export class Article{
    id: number;
    author: string;
    title: string;
    date: Date;
    content: string;

    constructor(
        id: number, 
        author: string = '', 
        title: string = '',
        date: Date,
        content: string = "")
    {
    
        this.id=id;
        this.author=author;
        this.title=title;
        this.date=date;
        this.content=content;

    }
}