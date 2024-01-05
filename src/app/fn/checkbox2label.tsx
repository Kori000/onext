import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'

const Checkbox2label = () => {
  return (
    <div className='flex center gap-2 '>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>我们是一伙的</Label>
    </div>
  )
}

export default Checkbox2label
