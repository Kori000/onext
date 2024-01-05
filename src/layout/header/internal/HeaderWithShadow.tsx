'use client'

import clsx from 'clsx'

export const HeaderWithShadow: Component = ({ children }) => {
  const headerOpacity = 1
  const showShadow = true
  return (
    <header
      data-hide-print
      className={clsx(
        'fixed left-0 right-0 top-0 z-[9] h-[4.5rem] overflow-hidden transition-shadow duration-200 lg:ml-[calc(100vw-100%)]',
        showShadow &&
          'shadow-none shadow-neutral-100 dark:shadow-neutral-800/50 lg:shadow-sm'
      )}
    >
      {children}
    </header>
  )
}
