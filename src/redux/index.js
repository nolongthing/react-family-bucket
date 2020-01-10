import { createStore, bindActionCreators } from 'redux';
import * as getActions from './action/index';

function reducer(state, action) {
    if (action.type === 'login') {
        return true;
    }

    if(action.type === 'logout'){
        return false;
    }
    return state;
}

const store = createStore(reducer, false);

export default {
    Actions:bindActionCreators(getActions, store.dispatch),
    store
};
