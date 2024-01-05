import { ClientOnly } from '@/components/common/only/ClientOnly'

import { Content } from '../content/Content'
import { Footer } from '../footer'
import { Header } from '../header/Header'
import { FABContainer, BackToTopFAB } from '@/components/ui/fab'

export const Root: Component = ({ children }) => {
  return (
    <>
      <Header />

      <Content>{children}</Content>

      <Footer />

      {/* 仅客户端组件 */}
      <ClientOnly>
        <FABContainer>
          <BackToTopFAB />
        </FABContainer>
      </ClientOnly>
    </>
  )
}
