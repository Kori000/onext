import '../styles/index.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ScrollTop } from '@/components/common/ScrollTop'
import TanstackQueryProvider from '@/providers/TanstackQueryProvider'
import { ToastContainer } from 'react-toastify'
import { siteConfig } from '@/config/site'
import { ThemeProvider } from '@/providers/theme-provider'

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
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div>{children}</div>

            <ToastContainer />
          </ThemeProvider>
          <ScrollTop />
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
