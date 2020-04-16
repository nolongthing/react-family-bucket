/* eslint-disable */
import React, { useState, lazy, Suspense } from 'react';
import styles from './sub.module.scss';
import { getAllStudents } from 'apiService';
const navBar = {
    'TgSub': '投顾工作室',
    'CFSub': '财富工作室'
}
export default function Sub() {
    const [current, setCurrent] = useState('TgSub');

    //模块懒加载
    let Tab = lazy(() => import(`./components/${current}`));

    function handleTabbar(k) {
        if (k == current) {
            return
        }
        setCurrent(k);
    }

    async function getstudents() {
        const { data } = await getAllStudents();
        console.log(data);
    }

    function createNav() {
        getstudents();
        let str = [];
        for (const k in navBar) {
            str.push(
                <span
                    onClick={() => { handleTabbar(k) }}
                    className={styles[current == k ? 'choosed' : '']}
                    key={k}
                >{navBar[k]}</span>);
        }
        return str;
    }
    return (
        <div className={styles['container']}>
            {/* 使用多个style类名 */}
            <div className={`${styles['title']} ${styles['second-style']}`}>
                订阅设置
            </div>
            <div className={styles['nav-bar']}>
                {createNav()}
            </div>
            <div className={styles['white']}></div>
            <Suspense fallback={<div>Loading</div>}>
                <Tab />
            </Suspense>
        </div>
    )
}
