'use client'

import { viewportAtom } from '@/atoms'
import { useIsClient } from '@/hooks/common/use-is-client'
import { ExtractAtomValue, useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'

const selector = (v: ExtractAtomValue<typeof viewportAtom>) => v.lg && v.w !== 0

/**
 * 仅客户端 + 大于 lg(1024px) 显示
 */
export const OnlyClientDesktop: Component = ({ children }) => {
  const isClient = useIsClient()

  const isLg = useAtomValue(selectAtom(viewportAtom, selector))
  if (!isClient) return null

  if (!isLg) return null

  return children
}
