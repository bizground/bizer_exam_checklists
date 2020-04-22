import React, { useState, useEffect } from 'react'
import Notices from 'components/notices'

const App = () => {
  return (
    <div>
      <h1>Checklists</h1>
      <p>ここにチェックリストを表示</p>
      <Notices />
    </div>
  )
}

export default App
