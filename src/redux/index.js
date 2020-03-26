import { bindActionCreators, applyMiddleware, createStore } from 'redux';
// import { createStore } from '../reduxx/index';
import * as getActions from './action/index';
import logger from 'redux-logger';
import thunk from 'thunk';

function reducer(state = false, action) {
    if (action.type === 'login') {
        return true;
    }

    if(action.type === 'logout'){
        return false;
    }
    return state;
}

/* redux应用中间件的方式，
在创建商店的时候，
第二个参数传递applyMiddleware函数的执行
该函数的参数即为需要应用的中间件 */
const store = createStore(reducer,applyMiddleware(logger));

export default {
    Actions:bindActionCreators(getActions, store.dispatch),
    store
};
