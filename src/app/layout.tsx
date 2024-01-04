import '../styles/index.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ScrollTop } from '@/components/common/ScrollTop'
import TanstackQueryProvider from '@/providers/TanstackQueryProvider'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ONext',
  description: 'Nextjs Template'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        data-theme='dark'
        className={inter.className}
      >
        <TanstackQueryProvider>
          <div>{children}</div>

          <ToastContainer />

          <ScrollTop />
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
