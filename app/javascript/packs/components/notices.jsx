import React from 'react'

const Notices = () => {
  const style = {
    fontSize: '10pt',
    color: 'gray'
  }

  return (
    <dl style={style}>
      <dt>チェックリストの取得API</dt>
      <dd>GET /api/checklists</dd>
      <dt>チェックリストの作成API</dt>
      <dd>POST /api/checklists</dd>
      <dt>チェックリストの削除API</dt>
      <dd>DELETE /api/checklists/:id</dd>
    </dl>
  )
}

export default Notices
