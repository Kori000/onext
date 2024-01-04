// 判断是否在客户端环境下
export const isClientSide = typeof window !== 'undefined'

// 判断是否在服务器端环境下
export const isServerSide = !isClientSide

// 判断是否处于开发环境
export const isDev = process.env.NODE_ENV === 'development'
