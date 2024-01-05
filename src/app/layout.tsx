import type { Metadata } from 'next'
import '../styles/index.css'

import { AutoScrollTop } from '@/components/common/AutoScrollTop'
import { siteConfig } from '@/config/site'
import { ToastContainer } from 'react-toastify'
import { Root } from '@/layout/root/Root'
import { Providers } from '@/providers/root'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png'
  // }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body data-theme='dark'>
        <Providers>
          <Root>{children}</Root>
        </Providers>
        <ToastContainer />
        <AutoScrollTop />
      </body>
    </html>
  )
}
