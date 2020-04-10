import React, { useRef, useEffect } from 'react';
import styles from './table.module.scss';
import data from './data.js';
export default function Table() {
  
  return (
    <div className={styles.container}>
      {/* <div className={styles.top}>名称</div> */}
      {
        data.map((item,index)=>{
          return(
            <div  className={styles.row}>
              <span className={styles.colum}>{item.name}</span>
              <span>{item.risk}</span>
              <span>{item.number}</span>
              <span>{item.else}</span>
              <span>{item.abc}</span>
              <span>{item.edit}</span>
            </div>
          )
        })
      }
    </div>
  )
}
