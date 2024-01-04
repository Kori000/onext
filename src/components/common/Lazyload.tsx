'use client'

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { FC, PropsWithChildren } from 'react'
import type { IntersectionOptions } from 'react-intersection-observer'

export type LazyLoadProps = {
  offset?: number
  placeholder?: React.ReactNode
} & IntersectionOptions

/**
 * 使用 react-intersection-observer 库来监测元素是否进入视野。
 * 可通过 offset 属性设置元素进入视野的偏移量。
 * 支持自定义 placeholder，在元素加载前显示占位内容。
 * 支持 IntersectionOptions 中的其他属性，如 threshold 等。
 * 通过 triggerOnce: true 配置，确保元素只会在第一次进入视野时触发加载。
 * 使用 useEffect 监听 inView 状态的变化，一旦元素进入视野，将 isLoaded 状态设置为 true。
 * 在元素加载前显示一个占位元素（<span data-hide-print data-testid="lazyload-indicator" ref={ref} />），并通过 CSS 控制其样式。
 */
export const LazyLoad: FC<PropsWithChildren & LazyLoadProps> = props => {
  const { placeholder = null, offset = 0, ...rest } = props
  const { ref, inView } = useInView({
    triggerOnce: true, // 确保元素只会在第一次进入视野时触发加载。
    rootMargin: `${offset || 0}px`,
    ...rest
  })
  const [isLoaded, setIsLoaded] = React.useState(false)
  useEffect(() => {
    if (inView) {
      setIsLoaded(true)
    }
  }, [inView])

  return (
    <>
      {!isLoaded && (
        <span
          data-hide-print
          data-testid='lazyload-indicator'
          ref={ref}
        />
      )}
      {!inView ? placeholder : props.children}
    </>
  )
}
