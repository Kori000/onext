'use client'

import React from 'react'

/**
 * 组合多个 React 上下文提供者（Context Providers）。React 上下文提供者是 React 中用于跨组件传递共享状态的机制。
 */
export const ProviderComposer: Component<{
  contexts: JSX.Element[]
}> = ({ contexts, children }) => {
  return contexts.reduceRight((kids: any, parent: any) => {
    return React.cloneElement(parent, { children: kids })
  }, children)
}
