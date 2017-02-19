import {IDENTITY_NEW} from '../constants'

export default store => next => action => {
    if (!action.callAPI) return next(action);

    const {callAPI, ...rest} = action;

    if (callAPI != IDENTITY_NEW) return next(action);
    let idNew = () => {
        let id = 9;
        return () => {
            return ++id;
        };
    };
    let i = idNew();
    let id = i();
    next({...rest, idNew: id});
}