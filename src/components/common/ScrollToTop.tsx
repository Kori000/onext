import { springScrollToTop } from '@/lib/scroller'
import React from 'react'
import { Button } from '../ui/button'

const ScrollToTop = () => {
  return (
    <Button
      aria-label='Scroll to top'
      id='to-top'
      variant={'outline'}
      className={
        'fixed bottom-[calc(7rem+env(safe-area-inset-bottom))] left-[calc(100vw-9rem)] px-5 py-7 z-[9] active:scale-90 duration-200 '
      }
      onClick={springScrollToTop}
    >
      <i className='icon-[mingcute--arow-to-up-line] text-lg' />
    </Button>
  )
}

export default ScrollToTop
