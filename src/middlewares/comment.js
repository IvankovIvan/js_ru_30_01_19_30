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
    console.log('8909809809809809808')
    let i = idNew();
    let id = i();
    next({...rest, idNew: id});
}