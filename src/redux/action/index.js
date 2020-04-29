export function getLoginAction() {
  return {
    type: 'login'
  }
}

export function getLogoutAction() {
  return {
    type: 'logout'
  }
}

/**
 * @description: 创建副作用函数action的函数
 * @return {function}: 副作用函数，用于dispatch分发
 */
export function asyncSetLoginType() {
  /**
   * @description: 由于thunk的存在，允许action是一个带有副作用的函数
   * @param {function} dispatch :store的dispatch函数
   * @param {function} getState :store的getState函数
   * @param {any} extra :来自用户设置的额外参数 (应用中间件的时候配置，一般用不到)
   */
  return function (dispatch) {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        dispatch(getLoginAction());
      } else {
        dispatch(getLogoutAction());
      }
    }, 1500);
  }
}