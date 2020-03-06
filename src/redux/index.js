import { bindActionCreators, applyMiddleware, createStore } from 'redux';
// import { createStore } from '../reduxx/index';
import * as getActions from './action/index';
import thunk from 'thunk';

function reducer(state, action) {
    if (action.type === 'login') {
        return true;
    }

    if(action.type === 'logout'){
        return false;
    }
    return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default {
    Actions:bindActionCreators(getActions, store.dispatch),
    store
};
