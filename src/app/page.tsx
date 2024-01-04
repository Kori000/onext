'use client'

import { toast } from '@/lib/toast'

export default function Home() {
  return (
    <main className='flex min-h-[calc(100vh-7rem)] center'>
      <button
        className='w-10 bg-zinc-200 '
        onClick={() => {
          toast('你好')
        }}
      >
        say hellow
      </button>
    </main>
  )
}
