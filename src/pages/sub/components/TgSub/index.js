import React from 'react';
import { withRouter } from 'react-router-dom';
import stores from '../../../../redux';
import styles from './tg.module.scss';
import { ReactComponent as Pay } from 'static/svgs/pay.svg';

function TgSub(props) {
    const { getState } = stores;
    function handleLogin() {
        console.log(props);
        props.history.push('/login');
    }
    return (
        <div>
            这是投顾工作室订阅项
            <button onClick={handleLogin}>点击跳转登陆</button>
            <div>显示登陆状态：{getState() ? '已登录' : '未登录'}</div>
            <Pay className={styles.icon} />
        </div>
    )
}

export default withRouter(TgSub);
