import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/index.css'

import { ScrollTop } from '@/components/common/ScrollTop'
import { siteConfig } from '@/config/site'
import TanstackQueryProvider from '@/providers/TanstackQueryProvider'
import { EventProvider } from '@/providers/event-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { ToastContainer } from 'react-toastify'
import { Root } from '@/components/layout/root/Root'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'white' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' }
  // ],
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
      <body
        data-theme='dark'
        className={inter.className}
      >
        <TanstackQueryProvider>
          <EventProvider key='viewportProvider'>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <Root>{children}</Root>

              <ToastContainer />
            </ThemeProvider>
          </EventProvider>
          <ScrollTop />
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
