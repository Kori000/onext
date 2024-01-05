'use client'

import clsx from 'clsx'

export const HeaderContainer: Component = ({ children }) => {
  return (
    <header
      className={clsx(
        'fixed left-0 right-0 top-0 z-[9] h-[4.5rem] overflow-hidden transition-shadow duration-200 lg:ml-[calc(100vw-100%)]'
      )}
    >
      {children}
    </header>
  )
}
