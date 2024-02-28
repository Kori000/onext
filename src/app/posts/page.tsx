import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <h1>Folder1 page</h1>
      <div>
        <Link href='/posts/posts2'>Folder2</Link>
      </div>
    </>
  )
}

export default page
