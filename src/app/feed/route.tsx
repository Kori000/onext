import xss from 'xss'

import { user } from '@/config/user'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-dynamic'
export const revalidate = 60 * 60 // 1 hour

interface RSSProps {
  title: string
  url: string
  author: string
  description: string
  data: {
    created: Date | null
    modified: Date | null
    link: string
    title: string
    text: string
    id: string
  }[]
}

export async function GET() {
  const now = new Date()
  const xml = `<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
<channel>
<title>${siteConfig.name}</title>
<description>${siteConfig.description}</description>
<language>zh-CN</language>
<copyright>© ${user.name} </copyright>
<pubDate>${now.toUTCString()}</pubDate>
<docs>https://mx-space.js.org</docs>
<image>
    <url>${xss(user.avatar || '')}</url>
    <title>${user.name}</title>
</image>
</channel></rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
