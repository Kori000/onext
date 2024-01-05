export interface LinkSection {
  name: string
  links: {
    name: string
    href: string
    external?: boolean
  }[]
}

export interface OtherInfo {
  date: string
  icp?: {
    text: string
    link: string
  }
}

export const defaultLinkSections: LinkSection[] = [
  {
    name: '关于',
    links: [
      {
        name: '关于本站',
        href: '/about-site'
      },
      {
        name: '关于我',
        href: '/about-me'
      }
    ]
  },
  {
    name: '更多',
    links: [
      {
        name: '时间线',
        href: '/timeline'
      }
    ]
  },
  {
    name: '联系',
    links: [
      // {
      //   name: '写留言',
      //   href: '/message'
      // },
      {
        name: '发邮件',
        href: 'mailto:kexin@korix.top',
        external: true
      },
      {
        name: 'GitHub',
        href: 'https://github.com/Kori000',
        external: true
      }
    ]
  }
]

export interface FooterConfig {
  linkSections: LinkSection[]
  otherInfo: OtherInfo
}
