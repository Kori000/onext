import dayjs from 'dayjs'
export const TokenKey = 'token'

/**
 * 获取 Token
 */
export function getToken(): string | null {
  const token = localStorage.getItem(TokenKey)

  return token || null
}

/**
 * 设置 Token
 */
export function setToken(token: string) {
  if (typeof token !== 'string') {
    return
  }
  return localStorage.setItem(TokenKey, token)
}

/**
 * 置空 Token
 */
export function removeToken() {
  return localStorage.setItem(TokenKey, '')
}

/**
 * 获取明天日期
 */
function getTomorrow() {
  return dayjs().add(1, 'd').set('h', 2).set('m', 0).toDate()
}
