import { atom, useAtomValue } from 'jotai'

import { getToken, removeToken, setToken } from '@/lib/token'
import { jotaiStore } from '@/lib/store'
import { toast } from '@/lib/toast'

import { user as userInfo } from '@/config/user'

const ownerAtom = atom(userInfo)
const isLoggedAtom = atom(false)

// TODO: 验证 token 的接口
const validateTokenFn = (token: string) => {
  return new Promise<{ ok: boolean }>((resolve, reject) => {
    resolve({ ok: true })
  })
}

// TODO: login 的接口
const loginFn = ({ username, password }: { username: string; password: string }) => {
  if (!username || !password) throw new Error('请输入账号密码')
  return new Promise<typeof userInfo & { token: string }>((resolve, reject) => {
    resolve({ ...userInfo, name: 'Kori的分身', token: 'ey12sadwqwe6469' })
  })
}

// TODO: refresh 的接口
const refreshTokenFn = (refresh_token: string) => {
  return new Promise<typeof userInfo & { token: string }>((resolve, reject) => {
    if (!refresh_token) throw new Error('refresh_token 不存在')
    resolve({ ...userInfo, name: 'Kori的分身', token: '刷新过的 token' })
  })
}

export const login = async (username?: string, password?: string) => {
  if (username && password) {
    const user = await loginFn({ username, password }).catch(err => {
      console.error(err)
      toast.error('再试试哦')
      throw err
    })
    // 登录成功
    if (user) {
      const token = user.token
      setToken(token)
      jotaiStore.set(isLoggedAtom, true)

      toast(`欢迎回来，${jotaiStore.get(ownerAtom)?.name}`, 'success')
    }

    return true
  }

  const token = getToken()

  // 没有 token 就退出
  if (!token) {
    return
  }

  // const outdateToast = () => toast.warn('登录身份过期了，再登录一下吧！')

  // 有 token 就验证 token 是否有效
  const validated = await validateTokenFn(token)
    .then(res => !!res.ok)
    .catch(() => {
      removeToken()

      return false
    })

  // 如果验证不过 就移除 token
  if (!validated) {
    removeToken()
    return
  }

  // 验证过了就刷新 token
  await refreshToken()

  toast(`欢迎回来，${jotaiStore.get(ownerAtom)?.name}`, 'success')

  return true
}

export const useIsLogged = () => useAtomValue(isLoggedAtom)

export const isLogged = () => jotaiStore.get(isLoggedAtom)

export const refreshToken = async () => {
  const token = getToken()
  if (!token) return
  await refreshTokenFn(token).then(res => {
    jotaiStore.set(isLoggedAtom, true)

    setToken(res.token)
  })
}
