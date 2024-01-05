'use client'

import { cn } from '@/lib/utils'

export const SiteOwnerAvatar: Component = ({ className }) => {
  const avatar = 'https://avatars.githubusercontent.com/u/116903901?v=4'

  // TODO:是否在直播
  const isLiving = false

  if (!avatar) return
  return (
    <div
      role={'img'}
      className={cn(
        'overflow pointer-events-none relative z-[9] select-none',

        isLiving ? 'cursor-pointer rounded-full' : '',
        className
      )}
    >
      <img
        src={avatar}
        alt='Site Owner Avatar'
        width={40}
        height={40}
        className={cn(
          'ring-2 ring-slate-200 dark:ring-neutral-800',
          isLiving ? 'rounded-full' : 'mask mask-squircle'
        )}
      />

      {isLiving && (
        <>
          <p className='absolute bottom-0 right-0 z-[1] rounded-md bg-red-400 p-1 font-[system-ui] text-[6px] text-white dark:bg-orange-700'>
            LIVE
          </p>

          <div className='absolute inset-0 scale-100 animate-ping rounded-full ring-2 ring-red-500/80' />
        </>
      )}
    </div>
  )
}
