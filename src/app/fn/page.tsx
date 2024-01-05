'use client'

import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/button'
import { toast } from '@/lib/toast'

export default function Home() {
  return (
    <main className='flex justify-center items-center'>
      <Button
        onClick={() => {
          toast.error('你好', {})
        }}
        variant='outline'
      >
        Button
      </Button>

      <ThemeToggle />
    </main>
  )
}
