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
import { AnimatedLogo } from './internal/AnimatedLogo'
import { UserAuth } from './internal/UserAuth'
import { HeaderContent } from './internal/HeaderContent'

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
        {/* 移动端菜单按钮 */}
        <HeaderMobileLeftButtonArea>
          <HeaderDrawerButton />
        </HeaderMobileLeftButtonArea>

        {/* 图标 */}
        <HeaderLogoArea>
          <AnimatedLogo />
        </HeaderLogoArea>

        {/* 桌面端导航 */}
        <HeaderDesktopCenterArea>
          <HeaderContent />
        </HeaderDesktopCenterArea>

        <div className='flex h-full w-full items-center'>
          <UserAuth />
        </div>
      </div>
    </HeaderContainer>
  )
})

MemoedHeader.displayName = 'MemoedHeader'
