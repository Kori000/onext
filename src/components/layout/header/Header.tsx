import { memo } from 'react'

const MemoedHeader = memo(() => {
  return <header></header>
})

MemoedHeader.displayName = 'MemoedHeader'
