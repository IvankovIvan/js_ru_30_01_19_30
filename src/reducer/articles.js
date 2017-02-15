import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ARTICLE_FILTER} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)

    }
    let articlesReturn = defaultArticles;
    if (payload) {
        if (payload.articleIds && payload.articleIds.length > 0) {
            articlesReturn = articlesReturn.filter(article => payload.articleIds.some(number => number == article.id));

        }
        console.log(articlesReturn);
        if (payload.from && payload.from != null)
            articlesReturn = articlesReturn.filter(article => new Date(article.date) >= new Date( payload.from));


        if (payload.to && payload.to != null)
            articlesReturn = articlesReturn.filter(article => new Date(article.date) <= new Date( payload.to));
    }
    return articlesReturn
}
