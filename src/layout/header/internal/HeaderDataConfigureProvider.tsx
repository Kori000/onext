'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { headerMenuConfig as baseHeaderMenuConfig } from './config'

const HeaderMenuConfigContext = createContext({
  config: baseHeaderMenuConfig
})

export const useHeaderConfig = () => useContext(HeaderMenuConfigContext)

export const HeaderDataConfigureProvider: Component = ({ children }) => {
  const [headerMenuConfig] = useState(baseHeaderMenuConfig)

  return (
    <HeaderMenuConfigContext.Provider
      value={useMemo(() => ({ config: headerMenuConfig }), [headerMenuConfig])}
    >
      {children}
    </HeaderMenuConfigContext.Provider>
  )
}
