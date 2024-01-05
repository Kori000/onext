'use client'

import { AnimatePresence } from 'framer-motion'

import { useIsLogged } from '@/atoms/owner'
import { UserArrowLeftIcon } from '@/components/icons/user-arrow-left'
import { FloatPopover } from '@/components/ui/float-popover'

import { MotionButtonBase } from '@/components/ui/motion-button'
import { user } from '@/config/user'
import { UserCircle } from 'lucide-react'
import { HeaderActionButton } from './HeaderActionButton'

const OwnerAvatar = () => {
  const ownerAvatar = user.avatar
  return (
    <MotionButtonBase
      onClick={() => {
        // window.open(resolveAdminUrl(), '_blank')
      }}
      className='pointer-events-auto relative flex h-10 w-10 items-center justify-center'
    >
      <span className='sr-only'>Go to dashboard</span>
      <img
        className='rounded-full'
        src={ownerAvatar}
        alt='site owner'
      />
      <UserCircle className='absolute -bottom-1 -right-1' />
    </MotionButtonBase>
  )
}

export function UserAuth() {
  const isLogged = useIsLogged()

  if (isLogged) {
    return <OwnerAvatar />
  }

  return (
    <AnimatePresence>
      <FloatPopover
        TriggerComponent={TriggerComponent}
        wrapperClassName='h-full w-full flex items-center justify-center'
        type='tooltip'
      >
        登录
      </FloatPopover>
    </AnimatePresence>
  )
}

const TriggerComponent = () => {
  return (
    <HeaderActionButton aria-label='Guest Login'>
      <UserArrowLeftIcon className='h-4 w-4' />
    </HeaderActionButton>
  )
}
