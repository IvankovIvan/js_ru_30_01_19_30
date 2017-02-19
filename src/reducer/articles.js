import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, FAIL, SUCCESS, START,IDENTITY_NEW} from '../constants'
import {arrayToMap} from '../utils'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            return state.filter(article => article.id !== payload.id)

        case LOAD_ALL_ARTICLES + START:
            return {...state, isLoading: true}

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response),
                isLoading: false
            }
        case IDENTITY_NEW:
        {
            const {articleId} = payload
            let stateNew = {...state}
            //вот здесь ты, на самом деле, мутируешь стейт. Все просто меняется по ссылке 
            stateNew.entities[articleId].comments.push(action.idNew);
            console.log('-------->', stateNew);
            return stateNew;
        }

    }

    return state
}
