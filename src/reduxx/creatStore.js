/**
 * 封装的createStore函数
 * @param {function} reducer 
 * @param {*} state 
 */
export default function (reducer, state) {
  let curState = state;
  let curReducer = reducer;

  function dispatch(action) {
    return curState = curReducer(curState, action);
  }

  function subscribe() {

  }

  function getState() {
    return curState;
  }

  function replaceReducer() {

  }
  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }
}