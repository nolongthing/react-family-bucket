import React from 'react';
import styles from './home.module.scss';
import { MyContext } from 'App';


export default function Home() {
  return (
    <MyContext.Consumer >
      {
        data => {
          console.log(data);
          return (
            <>
              <div className={styles['violin']}>
                this is index!
            </div>
            <div className={styles['violin1']}>
                this is index!
            </div>
              <div className={styles['box1']}></div>
              <div className={styles['box2']}></div>
            </>
          )
        }
      }
    </MyContext.Consumer>
  )
}
