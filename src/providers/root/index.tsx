'use client'

import { LazyMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { Provider as BalancerProvider } from 'react-wrap-balancer'

import { ProviderComposer } from '@/components/common/ProviderComposer'
import { DebugProvider } from './debug-provider'
import { EventProvider } from './event-provider'
import { JotaiStoreProvider } from './jotai-provider'
import { PageScrollInfoProvider } from './page-scroll-info-provider'
import { ScriptInjectProvider } from './script-inject-provider'
import TanstackReactQueryProvider from './tanstack-react-query-provider'
import { ThemeProvider } from './theme-provider'

const loadFeatures = () => import('./framer-lazy-feature').then(res => res.default)

const contexts: JSX.Element[] = [
  /**
   * 主题
   * shadcn-ui/tailwindcss 也是通过这个方式控制主题
   */
  <ThemeProvider
    key='themeProvider'
    attribute='class'
    defaultTheme='system'
    enableSystem
    disableTransitionOnChange
  />,

  // Tanstack 查询
  <TanstackReactQueryProvider key='tanstackReactQueryProvider' />,

  // jotai 状态管理
  <JotaiStoreProvider key='jotaiStoreProvider' />,

  // 使标题字体换行更加易读
  // https://www.npmjs.com/package/react-wrap-balancer
  <BalancerProvider key='balancerProvider' />,

  // 延迟加载Motion功能的子集来减小捆绑包大小
  <LazyMotion
    features={loadFeatures}
    strict
    key='framer'
  />
]
export function Providers({ children }: PropsWithChildren) {
  return (
    <ProviderComposer contexts={contexts}>
      {children}

      {/* 持续监听的事件 */}
      <EventProvider key='viewportProvider' />

      {/* 日志上报服务 */}
      {/* <SentryProvider key="SentryProvider" /> */}

      {/* 窗口滚动信息 */}
      <PageScrollInfoProvider key='PageScrollInfoProvider' />

      {/* 调试 */}
      <DebugProvider key='debugProvider' />

      {/* script 批量注入 */}
      <ScriptInjectProvider />
    </ProviderComposer>
  )
}
