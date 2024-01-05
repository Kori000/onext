import React from 'react'

const page = () => {
  return (
    <div className=' text-center w-full  mt-9 '>
      {Array.from({ length: 100 }).map((_, index) => {
        return (
          <div
            key={index}
            className='text-2xl font-bold text-primary/20'
          >
            页面
          </div>
        )
      })}
    </div>
  )
}

export default page
