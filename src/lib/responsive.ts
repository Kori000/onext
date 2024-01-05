import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

/**
 * 是否是移动端(根据 headers 的 user-agent 判断)
 */
export const isMobileDevice = () => {
  if (typeof process === 'undefined') {
    throw new Error(
      '[Server method] you are importing a server-only module outside of server'
    )
  }

  const { get } = headers()
  const ua = get('user-agent')

  // console.debug(ua);
  const device = new UAParser(ua || '').getDevice()

  return device.type === 'mobile'
}
