'use client'

import { useIsomorphicLayoutEffect } from 'foxact/use-isomorphic-layout-effect'

import { viewportAtom } from '@/atoms/viewport'
import { jotaiStore } from '@/lib/store'
import { throttle } from 'lodash-es'
import { selectAtom } from 'jotai/utils'

export const EventProvider: Component = ({ children }) => {
  useIsomorphicLayoutEffect(() => {
    const _readViewport = throttle(() => {
      const { innerWidth: w, innerHeight: h } = window
      const sm = w >= 640
      const md = w >= 768
      const lg = w >= 1024
      const xl = w >= 1280
      const _2xl = w >= 1536
      jotaiStore.set(viewportAtom, {
        sm,
        md,
        lg,
        xl,
        '2xl': _2xl,
        h,
        w
      })
    }, 16)

    // const readViewport = requestAnimationFrame(() => {
    //   console.log('更新了')

    //   const { innerWidth: w, innerHeight: h } = window
    //   const sm = w >= 640
    //   const md = w >= 768
    //   const lg = w >= 1024
    //   const xl = w >= 1280
    //   const _2xl = w >= 1536
    //   jotaiStore.set(viewportAtom, {
    //     sm,
    //     md,
    //     lg,
    //     xl,
    //     '2xl': _2xl,
    //     h,
    //     w
    //   })
    // })

    window.addEventListener('resize', _readViewport)

    _readViewport()

    return () => {
      window.removeEventListener('resize', _readViewport)
    }
  }, [])

  return <>{children}</>
}
