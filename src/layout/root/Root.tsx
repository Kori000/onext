import { ClientOnly } from '@/components/common/only/ClientOnly'
// import { BackToTopFAB, FABContainer } from '@/components/ui/fab'

import ScrollToTop from '@/components/common/ScrollToTop'
import { Content } from '../content/Content'
import { Footer } from '../footer'
import { Header } from '../header/Header'

export const Root: Component = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>

      <Footer />

      {/* 仅客户端组件 */}
      <ClientOnly>
        <ScrollToTop />
      </ClientOnly>
    </>
  )
}
