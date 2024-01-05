import { createPortal } from 'react-dom'
import type { FC, PropsWithChildren } from 'react'

import { useIsClient } from '@/hooks/common/use-is-client'

import { useRootPortal } from './provider'

/**
 * 这个组件的作用是在客户端运行时，将子组件渲染到指定的 DOM 元素位置，实现了在 React 应用中更灵活的组件渲染方式。
 * 如果 props.to 存在，则使用它作为目标元素，否则使用 to，如果都不存在则默认为 document.body。
 */
export const RootPortal: FC<
  {
    to?: HTMLElement
  } & PropsWithChildren
> = props => {
  const isClient = useIsClient()
  const to = useRootPortal()
  if (!isClient) {
    return null
  }

  return createPortal(props.children, props.to || to || document.body)
}
