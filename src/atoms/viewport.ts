import { useCallback } from 'react'
import { atom, useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'
import type { ExtractAtomValue } from 'jotai'

// 页面 视口
export const viewportAtom = atom({
  /**
   * 640px
   */
  sm: false,

  /**
   * 768px
   */
  md: false,

  /**
   * 1024px
   */
  lg: false,

  /**
   * 1280px
   */
  xl: false,

  /**
   * 1536px
   */
  '2xl': false,

  h: 0,
  w: 0
})

export const useViewport = <T>(
  selector: (value: ExtractAtomValue<typeof viewportAtom>) => T
): T =>
  useAtomValue(
    selectAtom(
      viewportAtom,
      useCallback(atomValue => selector(atomValue), [])
    )
  )

/**
 * 是否是移动端(根据尺寸判断,  宽度是否小于 1024px)
 */
export const useIsMobile = () =>
  useViewport(
    useCallback(
      (v: ExtractAtomValue<typeof viewportAtom>) => (v.sm || v.md || !v.sm) && !v.lg,
      []
    )
  )
