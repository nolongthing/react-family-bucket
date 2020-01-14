import React, { useRef, useEffect } from 'react';

import echarts from 'echarts';
import styles from './monthly.module.scss';

const defaultParams= {
    //画布大小
    grid: {
        left: '10%',
        top: 20,
        right: 20,
        bottom: '12%'
    },
    //x轴相关设置
    xAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        boundaryGap: false,
        data: ['9-12', '9-27', '10-04', '10-11', '10-18'],
        nameTextStyle: {
            color: '#666'
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: function (value) {
                return value * 100 + '%';
            }
        },
        nameTextStyle: {
            color: '#666'
        }
    },
    //图形样式的相关设置
    series: [{
        data: [0.01, 0.02, 0.05, 0.06, 0.03, 0.04, 0.01],
        type: 'line',
        lineStyle: {
            color: '#fe914f',
            width: 1,
        },
        symbolSize:1,
        itemStyle:{
            color:'#fe914f'
        },
        showSymbol: false,
        areaStyle: {
            color: '#fdebea'
        }
    }],
    //提示框相关的设置
    tooltip: {
        show: true,
        trigger: 'axis',
        triggerOn: 'click',
        hideDelay: 300,
        formatter: (params) => {
            const arr = params[0].name.split('-');
            const newtitle = `${arr[0]}月${arr[1]}日的收益\n`;
            const value = params[0].value * 100 + '%';
            return newtitle + '<br />' + value;
        }
    }
};

export default function Monthly() {
    const inComeDom = useRef();
    console.log(inComeDom);
    useEffect(() => {
        let inComeChart = echarts.init(inComeDom.current);
        inComeChart.setOption(defaultParams);
    }, [])

    return (
        <div className={styles['container']}>
            <div className={styles['title']}>财富月报</div>
            <div className={styles['content']}>
                <div className={styles['header']}>
                    <div className={styles['top']}>
                        <div className={styles['img']}></div>
                        <div className={styles['message']}>
                            <div className={styles['name']}>张三丰 先生</div>
                            <div className={styles['pid']}>40040072</div>
                        </div>
                    </div>
                    <div className={styles['buttom']}>
                        <div className={styles['port']}>
                            <div className={styles['p-title']}>理财持仓(元)</div>
                            <div className={styles['num']}>24,000.12</div>
                        </div>
                        <div className={styles['port']}>
                            <div className={styles['p-title']}>账户体检</div>
                            <div className={styles['p-content']}>C1(低风险承受)</div>
                        </div>
                    </div>
                </div>
                <div className={styles['income']}>
                    <div className={styles['income-title']}>10月理财收益3212.12元，收益率3.95%</div>
                    <div id='income-excel' className={styles['excel']} ref={inComeDom}></div>
                </div>
                <p>
                    在十月份的市场策略中，我们认为A股的重心将进一步上移，个股方面存在分化。从实际情况上看，中美贸易谈判取得阶段性进展，经济数据显示一定的韧性，但央行仍未下调MLF利率以及LPR价格保持不变使得大盘在上攻时受到了阻力。整体来看，10月份市场在震荡中缓慢上行。截止至10月25日，上证指数上涨1.71%，深圳成指上2.27%，创业板指上涨2.94%。
                    在十月份的市场策略中，我们认为A股的重心将进一步上移，个股方面存在分化。从实际情况上看，中美贸易谈判取得阶段性进展，经济数据显示一定的韧性，但央行仍未下调MLF利率以及LPR价格保持不变使得大盘在上攻时受到了阻力。整体来看，10月份市场在震荡中缓慢上行。截止至10月25日，上证指数上涨1.71%，深圳成指上2.27%，创业板指上涨2.94%。
                    在十月份的市场策略中，我们认为A股的重心将进一步上移，个股方面存在分化。从实际情况上看，中美贸易谈判取得阶段性进展，经济数据显示一定的韧性，但央行仍未下调MLF利率以及LPR价格保持不变使得大盘在上攻时受到了阻力。整体来看，10月份市场在震荡中缓慢上行。截止至10月25日，上证指数上涨1.71%，深圳成指上2.27%，创业板指上涨2.94%。
                </p>
            </div>
        </div>
    )
}
