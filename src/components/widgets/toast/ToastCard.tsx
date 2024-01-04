'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'
import type { FC } from 'react'
import type { ToastProps, TypeOptions } from 'react-toastify/dist/types'

import { Button } from '@/components/ui/button'

const typeMap: Record<TypeOptions, JSX.Element> = {
  success: <i className='icon-[mingcute--check-fill] text-[rgba(52,199,89)]' />,
  error: <i className='icon-[mingcute--close-fill] text-[rgba(255,59,48)]' />,
  info: <i className='icon-[mingcute--information-fill] text-[rgba(0,122,255)]' />,
  warning: <i className='icon-[mingcute--alert-fill] text-[rgba(255,149,0)]' />,
  default: <i className='icon-[mingcute--information-fill] text-[rgba(0,122,255)]' />
}

export const ToastCard: FC<{
  message: string
  toastProps?: ToastProps
  iconElement?: JSX.Element
  closeToast?: () => void
  onClick?: () => void
}> = props => {
  const { iconElement, message, closeToast, onClick } = props

  const MotionTag = onClick ? m.button : m.div

  return (
    <MotionTag
      layout='position'
      className={clsx(
        'relative w-full overflow-hidden rounded-xl shadow-md shadow-stone-800',
        'my-4 mr-4 px-4 py-5 pr-7',
        ' backdrop-blur-sm bg-neutral-900/90',
        'border border-neutral-900/80',
        'space-x-4',
        'flex items-center',
        'select-none',
        '[&>i]:flex-shrink-0',
        '[&>svg]:flex-shrink-0'
      )}
      onClick={onClick}
    >
      {iconElement ?? typeMap[props.toastProps?.type ?? 'default']}
      <span className='text-left'>{message}</span>

      <Button
        aria-label='Close toast'
        className='my-auto w-fit px-0 absolute bottom-0 right-3 top-0 flex items-center text-sm duration-200 bg-transparent hover:bg-transparent text-white/40 hover:text-white/80'
        onClick={e => {
          e.stopPropagation()
          closeToast?.()
        }}
      >
        <i className='icon-[mingcute--close-fill] p-2' />
      </Button>
    </MotionTag>
  )
}
