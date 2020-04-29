import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './login.module.scss';
import { asyncSetLoginType, getLogoutAction, getLoginAction } from '../../redux/action';

function Login(props) {
  console.log(props);
  function handleLogin() {
    props.onLogin();
  }

  function handleLogout() {
    props.onLogout();
  }

  async function handleRow() {
    props.onRowLog();
  }

  return (
    <div>
      这是登陆页
      <button onClick={handleLogin} className={styles['btn']}>点我登陆</button>
      <button onClick={handleLogout} className={styles['btn']}>点我退出</button>
      <button onClick={handleRow} className={styles['btn']}>随机登录态</button>
      <div>
        当前的登陆状态为：{`${props.loginType}`}
      </div>
    </div>
  )
}

// 以下部分可以抽离成为一个容器组件，Login作为展示组件引入
/* 商店状态与props的映射函数 */
const mapStateToProps =(state)=>{
  return {
    loginType:state.loginType
  };
}

/* 商店分发与props的映射函数 */
const mapDispatchToProps=(dispatch)=>{
  return{
    onLogin:()=>{
      dispatch(getLoginAction());
    },
    onLogout:()=>{
      dispatch(getLogoutAction());
    },
    onRowLog:()=>{
      dispatch(asyncSetLoginType());
    }
  }
}

/* 使用react-redux提供的connect函数创建容器组件 */
const LoginAction = connect(mapStateToProps,mapDispatchToProps)(withRouter(Login))

export default LoginAction;