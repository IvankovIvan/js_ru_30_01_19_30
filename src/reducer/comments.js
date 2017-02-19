import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap, mapToArr} from '../utils'
import {IDENTITY_NEW} from '../constants'

const defaultState = arrayToMap(defaultComments);


export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case IDENTITY_NEW: {
            const {user, text} = payload;
            const obj = {id: action.idNew, user, text};
            //console.log('--------->', obj);
            state[obj.id] = obj;
            //console.log('----------->',state);
            //console.log('----------->',mapToArr(state));
            return state;

        }
    }

    return state
}