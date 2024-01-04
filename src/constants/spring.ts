import type { Spring } from 'framer-motion'

// 弹簧效果，具有强烈的回弹效果
export const reboundPreset: Spring = {
  type: 'spring',
  bounce: 10, // 弹簧回弹的程度，值越大，回弹越明显
  stiffness: 140, // 弹簧刚度，值越大，回弹速度越快
  damping: 8 // 弹簧阻尼，值越大，回弹的幅度越小
}

// 微小阻尼效果的弹簧
export const microDampingPreset: Spring = {
  type: 'spring',
  damping: 24 // 弹簧阻尼，值越大，回弹的幅度越小
}

// 微小回弹效果的弹簧
export const microReboundPreset: Spring = {
  type: 'spring',
  stiffness: 300, // 弹簧刚度，值越大，回弹速度越快
  damping: 20 // 弹簧阻尼，值越大，回弹的幅度越小
}

// 软弹簧效果，较长的过渡时间
export const softSpringPreset: Spring = {
  duration: 0.35, // 过渡的总时间
  type: 'spring',
  stiffness: 120, // 弹簧刚度，值越大，回弹速度越快
  damping: 20 // 弹簧阻尼，值越大，回弹的幅度越小
}

// 软回弹效果的弹簧
export const softBouncePreset: Spring = {
  type: 'spring',
  damping: 10, // 弹簧阻尼，值越大，回弹的幅度越小
  stiffness: 100 // 弹簧刚度，值越大，回弹速度越快
}
