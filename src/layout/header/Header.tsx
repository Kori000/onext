import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { cn } from '@/lib/utils'
import { memo } from 'react'
import styles from './internal/grid.module.css'
import { BluredBackground } from './internal/BluredBackground'
import {
  HeaderLogoArea,
  HeaderDesktopCenterArea,
  HeaderMobileLeftButtonArea
} from './internal/HeaderArea'
import { HeaderContainer } from './internal/HeaderContainer'
import { HeaderDrawerButton } from './internal/HeaderDrawerButton'

export const Header = () => {
  return (
    <ErrorBoundary>
      <MemoedHeader />
    </ErrorBoundary>
  )
}

const MemoedHeader = memo(() => {
  return (
    <HeaderContainer>
      <BluredBackground />
      <div
        className={cn(
          'relative mx-auto grid h-full min-h-0 max-w-7xl grid-cols-[4.5rem_auto_4.5rem] lg:px-8',
          styles['header--grid']
        )}
      >
        <HeaderMobileLeftButtonArea>
          <HeaderDrawerButton />
        </HeaderMobileLeftButtonArea>

        <HeaderLogoArea>
          <div>一个 logo</div>
        </HeaderLogoArea>

        <HeaderDesktopCenterArea>
          <div>中间内容</div>
        </HeaderDesktopCenterArea>

        {/* <div className='flex h-full w-full items-center'>
          <UserAuth />
        </div> */}
      </div>
    </HeaderContainer>
  )
})

MemoedHeader.displayName = 'MemoedHeader'
