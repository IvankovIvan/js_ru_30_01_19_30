import {ADD_COMMENT, LOAD_COMMENT, SUCCESS} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {Record} from 'immutable'
import {DefaultReducerState} from './helpers'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
});

//const defaultState = arrayToMap(defaultComments)
const defaultState = DefaultReducerState();

export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action;

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {...payload.comment, id: randomId});

        case  LOAD_COMMENT + SUCCESS:
            return arrayToMap(response);
    }

    ///return state
    return arrayToMap(defaultComments)
}