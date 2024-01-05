'use client'

import Script, { ScriptProps } from 'next/script'

// 动态加载 script 脚本数组
export const ScriptInjectProvider = () => {
  // 例子:
  // let script1: ScriptProps = {
  //   strategy: 'beforeInteractive', // or 'lazyOnload' or 'afterInteractive'
  //   src: 'https://example.com/script.js',
  //   type: 'text/javascript',
  //   async: true,
  //   defer: true,
  //   crossOrigin: 'anonymous',
  //   nonce: 'random-nonce-value',
  //   id: 'script-id'
  // }
  const scripts: ScriptProps[] = []

  if (!scripts) return null
  return (
    <>
      {scripts.map(props => {
        const nextProps = { ...props } as any
        const dataKeys = Object.keys(props).filter(key => /data[A-Z]/.test(key))

        for (const key of dataKeys) {
          const newKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
          nextProps[newKey] = nextProps[key]
          delete nextProps[key]
        }

        return (
          <Script
            key={props.src}
            {...nextProps}
          />
        )
      })}
    </>
  )
}
