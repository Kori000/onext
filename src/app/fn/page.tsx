'use client'

import { ThemeToggle } from '@/components/common/ThemeToggle'
import Checkbox2label from './checkbox2label'
import ToastExample from './toastExample'
import { CarouselDApiDemo } from './carouselExample'

export default function Home() {
  return (
    <main className='flex min-h-[calc(100vh-10rem)] justify-center items-center flex-col gap-10'>
      <Checkbox2label />

      <ThemeToggle />

      <ToastExample />

      <CarouselDApiDemo />
    </main>
  )
}
