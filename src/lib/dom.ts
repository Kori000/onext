import type { ReactEventHandler } from 'react'

/**
 * 阻止事件冒泡。当事件发生在某个元素上时，事件会从该元素开始冒泡传播到更高层的父元素。通过调用 stopPropagation 函数，可以阻止事件继续向上传播，从而防止触发更高层元素的相同事件处理程序。
 */
export const stopPropagation: ReactEventHandler<any> = e => e.stopPropagation()

/**
 * 阻止事件的默认行为。某些事件触发时，浏览器会执行默认的操作，比如点击链接时跳转到指定页面。通过调用 preventDefault 函数，可以阻止浏览器执行事件的默认行为，从而自定义事件的处理方式。
 */
export const preventDefault: ReactEventHandler<any> = e => e.preventDefault()
