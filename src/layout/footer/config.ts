export interface LinkSection {
  name: string
  links: {
    name: string
    href: string
    external?: boolean
  }[]
}

export const defaultLinkSections: LinkSection[] = [
  {
    name: '关于',
    links: [
      {
        name: '关于本站',
        href: '/'
      },
      {
        name: '关于我',
        href: '/'
      },
      {
        name: '关于此项目',
        href: '',
        external: true
      }
    ]
  },
  {
    name: '更多',
    links: [
      {
        name: '时间线',
        href: '/'
      }
    ]
  },
  {
    name: '联系',
    links: [
      {
        name: '写留言',
        href: '/'
      },
      {
        name: '发邮件',
        href: '',
        external: true
      },
      {
        name: 'GitHub',
        href: '',
        external: true
      }
    ]
  }
]
