import { Button } from '@/components/ui/button'
import { toast } from '@/lib/toast'
import React from 'react'
import { TypeOptions } from 'react-toastify'

const ToastExample = () => {
  return (
    <section className='flex items-start flex-wrap gap-2 '>
      {['success', 'info', 'warning', 'error'].map((item, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              toast(item, item as TypeOptions)
            }}
            variant='outline'
          >
            {item}
          </Button>
        )
      })}
    </section>
  )
}

export default ToastExample
