import './news.css';
import { IArticle } from 'types/interfaces';
class News {

    draw(data:IArticle[]):void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment() ;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement ;
        if (newsItemTemp) {
            news.forEach((item:IArticle, idx:number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
                if (newsClone) {
                    if (newsClone.querySelector('.news__item')) {
            if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');
                if (newsClone.querySelector('.news__meta-photo')){
                    const news_meta_photo:HTMLElement = newsClone.querySelector('.news__meta-photo')!;
                    news_meta_photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
            })` ; }
            if (newsClone.querySelector('.news__meta-author')){
                newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;}
            if (newsClone.querySelector('.news__meta-date')) {
                newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');}
                if (newsClone.querySelector('.news__description-title')) {
                newsClone.querySelector('.news__description-title')!.textContent = item.title;}
            if (newsClone.querySelector('.news__description-source')) {
                newsClone.querySelector('.news__description-source')!.textContent = item.source.name;}
            if (newsClone.querySelector('.news__description-content')){
                newsClone.querySelector('.news__description-content')!.textContent = item.description;}
            if (newsClone.querySelector('.news__read-more a')) {
                newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);}

            fragment.append(newsClone);
        }}
        });
            let newsE =document.querySelector('.news') as HTMLElement;

        if (newsE) {
            newsE.innerHTML = '';
            newsE.appendChild(fragment);
        }

    }
}
}

export default News;
