import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './login.module.scss';
import store from '../../redux/index';
import { asyncSetLoginType, getLogoutAction, getLoginAction } from '../../redux/action';


function Login(props) {
  const { dispatch, getState } = store;
  const [state, setState] = useState(getState().loginType);

  function handleLogin() {
    console.log(props);
    // Actions.getLoginAction();
    dispatch(getLoginAction());
    setState(getState().loginType);
    // props.history.goBack();
  }

  function handleLogout() {
    // Actions.getLogoutAction();
    dispatch(getLogoutAction());
    setState(getState().loginType);
  }

  async function handleRow() {
    dispatch(asyncSetLoginType());
    // const type = getState().loginType;
    // setState();
  }

  return (
    <div>
      这是登陆页
      <button onClick={handleLogin} className={styles['btn']}>点我登陆</button>
      <button onClick={handleLogout} className={styles['btn']}>点我退出</button>
      <button onClick={handleRow} className={styles['btn']}>随机登录态</button>
      <div>
        当前的登陆状态为：{`${state}`}
      </div>
    </div>
  )
}
export default withRouter(Login);