import React from 'react'

export default function Download(props) {
  /* 跳转页面且不记住历史 */
  function handleDownload() {
    props.history.replace('/monthly');
  }
  return (
    <div>

      this is Download!
      <div onClick={handleDownload} style={{ color: '#fff', background: '#ff7015', width: '100%', height: '50px', textAlign: 'center' }}>DownLoad APP</div>
    </div>
  )
}
