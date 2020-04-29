/* eslint-disable */
import { applyMiddleware, createStore } from 'redux';
// import { createStore } from '../reduxx/index';
// import * as getActions from './action/index';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



/* redux应用中间件的方式，
在创建商店的时候，
第二个参数传递applyMiddleware函数的执行
该函数的参数即为需要应用的中间件 */
export default createStore(reducer,applyMiddleware(thunk, logger));

// const store = createStore(reducer,applyMiddleware(thunk, logger));
// export default {
//  /* 使用bindActionCreators函数自动创建action分发函数 */
//     Actions:bindActionCreators(getActions, store.dispatch),
//     store
// };
