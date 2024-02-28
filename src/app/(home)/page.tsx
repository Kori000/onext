import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' text-center w-full mt-9  '>
      <Button
        asChild
        className='mb-10 '
      >
        <Link href='/fn'>前往功能页面</Link>
      </Button>

      {Array.from({ length: 100 }).map((_, index) => {
        return (
          <div
            key={index}
            className='text-lg tracking-wider  text-primary/20'
          >
            回到顶部↘
          </div>
        )
      })}
    </div>
  )
}

export default page

export const metadata: Metadata = {
  title: '主页'
}
