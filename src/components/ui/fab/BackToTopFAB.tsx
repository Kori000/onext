'use client'

import { springScrollToTop } from '@/lib/scroller'

import { FABBase } from './FABContainer'
import { useViewport } from '@/atoms'
import { useMemo } from 'react'

export const BackToTopFAB = () => {
  const windowHeight = useViewport(v => v.h)
  const shouldShow = useMemo(() => {
    return true
    // return scrollTop > windowHeight / 5
  }, [windowHeight])

  return (
    <FABBase
      id='to-top'
      aria-label='Back to top'
      show={true}
      onClick={springScrollToTop}
    >
      <i className='icon-[mingcute--arow-to-up-line]' />
    </FABBase>
  )
}
