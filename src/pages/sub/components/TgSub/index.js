import React from 'react';
import { withRouter } from 'react-router-dom';

function TgSub(props) {

    function handleLogin() {
        console.log(props);
        props.history.push('/login');
    }
    return (
        <div>
            这是投顾工作室订阅项
            <button onClick={handleLogin}>点击跳转登陆</button>
        </div>
    )
}

export default withRouter(TgSub);
