import { ClientOnly } from '@/components/common/ClientOnly'
// import { BackToTopFAB, FABContainer } from '@/components/ui/fab'

import { Content } from '../content/Content'
import { Footer } from '../footer'
import { Button } from '@/components/ui/button'
import { springScrollToTop } from '@/lib/scroller'
// import { Header } from '../header'

export const Root: Component = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Content>{children}</Content>

      <Footer />
      <ClientOnly>
        <Button
          id='to-top'
          variant={'outline'}
          className={
            'fixed bottom-[calc(7rem+env(safe-area-inset-bottom))] left-[calc(100vw-9rem)] px-5 py-7 z-[9] active:scale-90 duration-200 '
          }
          onClick={springScrollToTop}
        >
          <i className='icon-[mingcute--arow-to-up-line] text-lg' />
        </Button>
      </ClientOnly>
    </>
  )
}
