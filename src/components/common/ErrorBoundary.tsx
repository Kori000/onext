'use client'

import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary'
import type { FC, PropsWithChildren } from 'react'

/**
 * 错误边界
 */
const FallbackComponent = () => {
  return <div className='flex w-full flex-col py-6 center'>Something went wrong.</div>
}
export const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundaryLib
      FallbackComponent={FallbackComponent}
      onError={e => {
        console.error(e)

        // TODO  sentry
      }}
    >
      {children}
    </ErrorBoundaryLib>
  )
}
