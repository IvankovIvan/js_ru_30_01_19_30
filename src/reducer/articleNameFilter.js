import { ARTICLE_NAME_FILTER } from '../constants'

export default (articleName = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case ARTICLE_NAME_FILTER:
            return payload.ids;
    }
    return articleName;
}