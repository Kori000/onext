import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'

const Checkbox2label = () => {
  return (
    <div className='flex center gap-2 '>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>这个是主题切换 ↓ </Label>
    </div>
  )
}

export default Checkbox2label
