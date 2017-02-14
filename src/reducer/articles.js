import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ARTICLE_FILTER} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)

    }
    console.log("%%%%%%%");
    console.log(payload);
    if (payload && payload.articleIds && payload.articleIds.length > 0)
        return articles.filter(article => payload.articleIds.some(number => number == article.id));
    return articles
}

/*console.log("%%%%%%%");
console.log(payload);
let articlesReturn = articles;
if (payload) {
    if (payload.articleIds && payload.articleIds.length > 0)
        return articlesReturn.filter(article => payload.articleIds.some(number => number == article.id));
    console.log("!!!!!");
    if (payload.from && payload.from != null) {
        articlesReturn = articlesReturn.filter(article => article.date >= payload.from);
    }
    console.log("?????");
}
return articlesReturn*/