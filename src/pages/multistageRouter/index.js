import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './mul.module.scss';
export default function MultistageRouter(props) {
  return (
    <div>
      this is developer
      <div>
        {/* activeClassName属性表示当前链接被选中是的类名 */}
        <NavLink replace={true} activeClassName={styles.active} to="/multistageRouter/home">首页</NavLink>
        <NavLink replace={true} activeClassName={styles.active} to="/multistageRouter/download">下载App</NavLink>
      </div>
      {props.children}
    </div>
  )
}
