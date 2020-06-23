import React, { useRef, useEffect } from 'react';
import echarts from 'echarts';
import styles from './home.module.scss';


const params = {
  // legend:{
  //   height:'300'
  // },
  grid: {
    x: '11%',
    y: '7%',
    height: '30%',
    width: '110%'
  },
  // title: {
  //   text: '基础雷达图'
  // },
  tooltip: {
    formatter: ({ data, value }) => {
      return `<div>${data.name}</div>
      <div> ${data.nameList[0]}: ${value[0]}分</div>
      <div>${data.nameList[1]}: ${value[1]}分</div>
      <div>${data.nameList[2]}: ${value[2]}分</div>`
    }
  },
  // legend: {
  //   data: ['实际开销']
  // },
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        // backgroundColor: '#999',
        // borderRadius: 3,
        padding: [3, 5]
      }
    },
    nameGap:20,
    splitArea: {
      areaStyle: {
        color: ['transparent']
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: 'red'
      }
    },
    axisLabel: {
      show: true,
      formatter: (value, index) => {
        if (index === 4) {
          return `${value}分`
        }
      },
      margin:10,
      align:'center',
      verticalAlign:'top',
      textStyle: {
        color: '#fff'
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#333'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#333'
      }
    },
    splitNumber: 4,
    indicator: [
      { name: '销售', max: 100 },
      { name: '管理', max: 100 },
      { name: '信息技术', max: 100 }
    ]
  },
  series: [{
    name: '综合分析',
    type: 'radar',
    // areaStyle: {normal: {}},
    data: [
      {
        value: [80, 90, 78],
        name: '管线',
        areaStyle: {
          color: 'rgba(45, 183, 245, 0.5)'
        },
        lineStyle: {
          color: '#fff',
          width: 1,
        },
        symbolSize: 0,
        nameList: ['销售', '管理', '信息技术']
      }
    ]
  }]
}

export default function Index() {
  const box = useRef();
  useEffect(() => {

    console.log(box);
    const label = echarts.init(box.current);
    label.setOption(params);
  }, [])

  return (
    <div>
      <div id={styles['box']} style={{ width: '7rem', height: '4rem' }} ref={box}>

      </div>
    </div>
  )
}
