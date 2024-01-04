export const getTweetId = (url: URL) => {
  return url.pathname.split('/').pop()!
}

const GITHUB_HOST = 'github.com'

export const isGithubRepoUrl = (url: URL) => {
  return (
    url.hostname === GITHUB_HOST &&
    url.pathname.startsWith('/') &&
    url.pathname.split('/').length === 3
  )
}

export const isGithubPrUrl = (url: URL) => {
  return url.hostname === GITHUB_HOST && url.pathname.includes('/pull/')
}

export const isYoutubeUrl = (url: URL) => {
  return url.hostname === 'www.youtube.com' && url.pathname.startsWith('/watch')
}

export const isGithubProfileUrl = (url: URL) => {
  return url.hostname === GITHUB_HOST && url.pathname.split('/').length === 2
}

export const isGithubFilePreviewUrl = (url: URL) => {
  // https://github.com/Innei/sprightly/blob/14234594f44956e6f56f1f92952ce82db37ef4df/src/socket/handler.ts
  const [_, , , type] = url.pathname.split('/')
  return url.hostname === GITHUB_HOST && type === 'blob'
}

export const isTweetUrl = (url: URL) => {
  return isTwitterUrl(url) && url.pathname.startsWith('/')
}

export const isTwitterProfileUrl = (url: URL) => {
  return isTwitterUrl(url) && url.pathname.split('/').length === 2
}

export const isGithubUrl = (url: URL) => {
  return url.hostname === GITHUB_HOST
}

export const isTwitterUrl = (url: URL) => {
  return url.hostname === 'twitter.com' || url.hostname === 'x.com'
}

export const isTelegramUrl = (url: URL) => {
  return url.hostname === 't.me'
}

export const isCodesandboxUrl = (url: URL) => {
  // https://codesandbox.io/s/framer-motion-layoutroot-prop-forked-p39g96
  return url.hostname === 'codesandbox.io' && url.pathname.split('/').length === 3
}

export const isBilibiliUrl = (url: URL) => {
  return url.hostname.includes('bilibili.com')
}

export const isZhihuUrl = (url: URL) => {
  return url.hostname === 'www.zhihu.com'
}

export const isZhihuProfileUrl = (url: URL) => {
  return isZhihuUrl(url) && url.pathname.startsWith('/people/')
}

export const isWikipediaUrl = (url: URL) => {
  return url.hostname.includes('wikipedia.org')
}

export const parseZhihuProfileUrl = (url: URL) => {
  const [_, type, id] = url.pathname.split('/')
  return {
    type,
    id
  }
}

export const parseGithubPrUrl = (url: URL) => {
  const [_, owner, repo, type, pr] = url.pathname.split('/')
  return {
    owner,
    repo,
    type,
    pr
  }
}
