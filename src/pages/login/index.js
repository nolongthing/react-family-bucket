import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './login.module.scss';
import stores from '../../redux/index';


function Login(props) {
    const { Actions, store } = stores;
    const [state, setState] = useState(store.getState());

    function handleLogin() {
        console.log(props);
        Actions.getLoginAction();
        setState(store.getState());
        props.history.goBack();
    }

    function handleLogout() {
        Actions.getLogoutAction();
        setState(store.getState());
    }

    return (
        <div>
            这是登陆页
            <button onClick={handleLogin} className={styles['btn']}>点我登陆</button>
            <button onClick={handleLogout} className={styles['btn']}>点我退出</button>
            <div>
                当前的登陆状态为：{`${state}`}
            </div>
        </div>
    )
}
export default withRouter(Login);