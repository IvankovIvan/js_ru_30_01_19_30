import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import articleNameFilter from './articleNameFilter'
import datePeriodFilter from './datePeriodFilter'

export default combineReducers({
    count: counterReducer,
    articles,
    articleNameFilter,
    datePeriodFilter

})