'use client'

import { useIsMobile } from '@/atoms/viewport'
import { useIsClient } from '@/hooks/common/use-is-client'

/**
 * 仅客户端 + 手机端 显示
 */
export const OnlyClientMobile: Component = ({ children }) => {
  const isClient = useIsClient()

  const isMobile = useIsMobile()

  if (!isClient) return null

  if (!isMobile) return null

  return children
}
