import {Record} from 'immutable'
import {DefaultReducerState} from './helpers'
import {LOAD_COMMENTS, SUCCESS} from '../constants'
import {arrayToMap} from "../utils";

const CommentPageModel = Record( {
    id: null,
    comments: []
});

const commentPageDefault = new DefaultReducerState();

export default (state = commentPageDefault, action) => {
    const {type, response, payload} = action;

    switch (type) {
        case LOAD_COMMENTS + SUCCESS:
            const comments = response.records.map(element => element.id);
            const commentsModel =  new CommentPageModel({id: payload.page,comments });
            return state.setIn(['entities', payload.page], commentsModel);

    }

    return state;
}

