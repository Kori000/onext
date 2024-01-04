'use client'

import { animateValue } from 'framer-motion'

import { microDampingPreset } from '@/constants/spring'

/**
 * 使用弹簧效果滚动到指定的垂直位置
 */
export const springScrollTo = (y: number) => {
  // 获取当前页面的滚动位置
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

  // 定义停止弹簧滚动的处理函数
  const stopSpringScrollHandler = () => {
    animation.stop()
  }

  // 创建并启动弹簧动画
  const animation = animateValue({
    keyframes: [scrollTop + 1, y], // 定义关键帧，表示滚动的起点和终点
    autoplay: true,
    ...microDampingPreset, // 使用预设的微小阻尼弹簧效果
    onPlay() {
      // 在播放时添加滚动事件监听器，用于停止弹簧滚动
      window.addEventListener('wheel', stopSpringScrollHandler)
      window.addEventListener('touchmove', stopSpringScrollHandler)
    },

    onUpdate(latest) {
      // 在动画更新时执行，latest 表示当前的滚动位置
      if (latest <= 0) {
        // 如果滚动位置小于等于0，停止弹簧滚动
        animation.stop()
      }
      // 将页面滚动到最新的位置
      window.scrollTo(0, latest)
    }
  })

  // 当动画结束时，移除事件监听器
  animation.then(() => {
    window.removeEventListener('wheel', stopSpringScrollHandler)
    window.removeEventListener('touchmove', stopSpringScrollHandler)
  })

  // 返回动画实例
  return animation
}

/**
 * 使用弹簧效果滚动到页面顶部
 */
export const springScrollToTop = () => {
  return springScrollTo(0)
}

/**
 * 使用弹簧效果滚动到指定元素的位置
 */
export const springScrollToElement = (element: HTMLElement, delta = 40) => {
  // 计算元素相对于页面顶部的位置
  const y = calculateElementTop(element)

  // 将滚动位置稍微调整一下
  const to = y + delta

  // 调用弹簧滚动函数
  return springScrollTo(to)
}

/**
 * 计算元素相对于页面顶部的位置
 */
const calculateElementTop = (el: HTMLElement) => {
  let top = 0
  while (el) {
    top += el.offsetTop
    el = el.offsetParent as HTMLElement
  }
  return top
}
