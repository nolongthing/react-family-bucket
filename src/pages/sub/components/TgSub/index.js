import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLogoutAction, getLoginAction } from '../../../../redux/action';
import styles from './tg.module.scss';
import { ReactComponent as Pay } from 'static/svgs/pay.svg';

function TgSub(props) {
    /* hook使用redux状态 */
    const loginType = useSelector(state => state.loginType);
    /* hook分发Action */
    const dispatch = useDispatch();
    console.log(12121212);
    /* 跳转登陆页面点击事件 */
    function handleLogin() {
        console.log(props);
        props.history.push('/login');
    }
    /* 切换登陆状态点击事件 */
    function handleViolation() {
        if (loginType) {
            dispatch(getLogoutAction());
        } else {
            dispatch(getLoginAction());
        }
    }
    return (
        <div>
            这是投顾工作室订阅项
            <button onClick={handleLogin}>点击跳转登陆</button>
            <div>显示登陆状态：{loginType ? '已登录' : '未登录'}</div>
            <Pay className={styles.icon} />
            <div className={styles.line}></div>
            <button onClick={handleViolation}>违规登陆/登出</button>
        </div>
    )
}

export default withRouter(TgSub);
