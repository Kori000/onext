'use client'

import { startTransition, useCallback, useMemo, useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'foxact/use-isomorphic-layout-effect'
import { atom, useAtomValue, useSetAtom } from 'jotai'
import type { FC, PropsWithChildren } from 'react'

import { throttle } from 'lodash-es'
import { createAtomSelector } from '@/lib/atom'

/**
 * 页面距离顶部滚动的距离
 */
export const pageScrollLocationAtom = atom(0)

/**
 * 页面滚动的方向
 */
const pageScrollDirectionAtom = atom<'up' | 'down' | null>(null)

export const PageScrollInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ScrollDetector />
      {children}
    </>
  )
}

const ScrollDetector = () => {
  /**
   * 设置页面滚动的距离
   */
  const setPageScrollLocation = useSetAtom(pageScrollLocationAtom)

  /**
   * 设置页面滚动的方向
   */
  const setPageScrollDirection = useSetAtom(pageScrollDirectionAtom)
  const prevScrollY = useRef(0)
  const setIsInteractiveOnceRef = useRef(false)

  useIsomorphicLayoutEffect(() => {
    const scrollHandler = throttle(
      () => {
        if (!setIsInteractiveOnceRef.current) {
          setIsInteractiveOnceRef.current = true
        }
        const currentTop = document.documentElement.scrollTop

        setPageScrollDirection(prevScrollY.current - currentTop > 0 ? 'up' : 'down')
        prevScrollY.current = currentTop
        startTransition(() => {
          setPageScrollLocation(prevScrollY.current)
        })
      },
      16,
      {
        leading: false
      }
    )
    window.addEventListener('scroll', scrollHandler)

    scrollHandler()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return null
}

/**
 * @returns 获取页面距离顶部滚动的距离
 */
const usePageScrollLocation = () => useAtomValue(pageScrollLocationAtom)

/**
 * @returns 获取页面滚动的方向
 */
const usePageScrollDirection = () => useAtomValue(pageScrollDirectionAtom)

const usePageScrollLocationSelector = createAtomSelector(pageScrollLocationAtom)

const usePageScrollDirectionSelector = createAtomSelector(pageScrollDirectionAtom)

/**
 * @description 页面是否向上滚动并且页面超过某个距离
 */
const useIsScrollUpAndPageIsOver = (threshold: number) => {
  return useAtomValue(
    useMemo(
      () =>
        atom(get => {
          const scrollLocation = get(pageScrollLocationAtom)
          const scrollDirection = get(pageScrollDirectionAtom)
          return scrollLocation > threshold && scrollDirection === 'up'
        }),
      [threshold]
    )
  )
}
export {
  usePageScrollDirection,
  usePageScrollLocation,
  useIsScrollUpAndPageIsOver,
  usePageScrollLocationSelector,
  usePageScrollDirectionSelector
}
