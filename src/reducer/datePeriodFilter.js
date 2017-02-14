import {DATE_PERIOD_FILTER} from '../constants'

export default (datePeriod = {from: null, to: null}, action) => {
    const {type, payload} = action;
    switch (type) {
        case DATE_PERIOD_FILTER:
            return payload;
    }
    return datePeriod;
}
