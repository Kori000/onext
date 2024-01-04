import { isClientSide, isDev } from '@/lib/env'

export const API_URL: string = (() => {
  if (isDev) return process.env.NEXT_PUBLIC_API_URL

  return process.env.NEXT_PUBLIC_API_URL
})() as string
