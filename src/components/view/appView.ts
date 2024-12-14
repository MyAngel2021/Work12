import { IArticle, INewsResponse, ISourceResponse, ISource } from 'types/interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news : News;
    private sources:Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:INewsResponse):void {
        const values:IArticle[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:ISourceResponse):void {
        const values:ISource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
