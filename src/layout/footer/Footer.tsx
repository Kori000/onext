import { ThemeToggle } from '@/components/common/ThemeToggle'
import { FooterInfo } from './FooterInfo'

export const Footer = () => {
  return (
    <footer
      data-hide-print
      className='relative z-[1] mt-32 border-t border-border bg-slate-50 py-6 text-primary/80 dark:bg-neutral-900'
    >
      <div className='px-4 sm:px-8'>
        <div className='relative mx-auto max-w-7xl lg:px-8'>
          <FooterInfo />

          <div className='mt-6 block text-center md:absolute md:bottom-0 md:right-0 md:mt-0'>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
