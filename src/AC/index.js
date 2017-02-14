import {INCREMENT, DELETE_ARTICLE, ARTICLE_NAME_FILTER, ARTICLE_FILTER,DATE_PERIOD_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    };

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addArticleNameFilter(ids) {
    return {
        type: ARTICLE_NAME_FILTER,
        payload:  { ids }
    }
}

export function addDatePeriodFilter({from, to}) {
    return {
        type: DATE_PERIOD_FILTER,
        payload: {from, to}
    }
}

export function articleSearch(articleIds) {
    return {
        type: ARTICLE_FILTER,
        payload: { articleIds }
    }
}

