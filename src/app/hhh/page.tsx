'use client'
import { atom, useAtom } from 'jotai'
import React from 'react'

const hhhAtom = atom(2)

const Page = () => {
  const [hhh, setHhh] = useAtom(hhhAtom)
  return (
    <div>
      <h1>{hhh}</h1>
    </div>
  )
}

export default Page
