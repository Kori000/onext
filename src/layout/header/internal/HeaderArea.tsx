'use client'

import { cn } from '@/lib/utils'

import styles from './grid.module.css'
import { OnlyClientDesktop } from '@/components/common/only/OnlyClientDesktop'

export const HeaderLogoArea: Component = ({ children }) => {
  return (
    <div className={cn('relative', styles['header--grid__logo'])}>
      <div className={cn('relative flex h-full w-full items-center justify-center')}>
        {children}
      </div>
    </div>
  )
}

// 小于 lg 才显示
export const HeaderMobileLeftButtonArea: Component = ({ children }) => {
  return (
    <div
      className={cn('relative flex h-full w-full items-center justify-center lg:hidden')}
    >
      {children}
    </div>
  )
}

// 居中内容
export const HeaderDesktopCenterArea: Component = ({ children }) => {
  return (
    <OnlyClientDesktop>
      <div className='flex min-w-0 flex-grow'>
        <div className='relative flex flex-grow items-center justify-center'>
          {children}
        </div>
      </div>
    </OnlyClientDesktop>
  )
}
