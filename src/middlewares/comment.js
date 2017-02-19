import {IDENTITY_NEW} from '../constants'

export default store => next => action => {
    //почему?
    if (!action.callAPI) return next(action);

    const {callAPI, ...rest} = action;
    //Зачем тебе callAPI, мидлвара же совсем другим занимается, не путай себя, заведи другой флажок
    if (callAPI != IDENTITY_NEW) return next(action);
    let idNew = () => {
        let id = 9;
        return () => {
            return ++id;
        };
    };
    console.log('8909809809809809808')
    let i = idNew();
    let id = '_' + Math.random().toString(36).substr(2, 9);
    next({...rest, idNew: id});
}
