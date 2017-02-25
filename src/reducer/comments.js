import {ADD_COMMENT, LOAD_COMMENT, SUCCESS,START} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {Record} from 'immutable'
import {DefaultReducerState} from './helpers'

const CommentModel = Record({
    id: 0,
    user: '',
    text: ''
});

const defaultState = DefaultReducerState();

export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action;

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {...payload.comment, id: randomId});

        case  LOAD_COMMENT + SUCCESS:
            return state.set('entities', arrayToMap(response, CommentModel))


            //const myNewMap = myMap.updateIn(['nested', 'someKey'], arr => arr.push('bye'));
    }

    return state;
}