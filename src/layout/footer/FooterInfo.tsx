import Link from 'next/link'

import { cn } from '@/lib/utils'

import { defaultLinkSections } from './config'

import { icp, user } from '@/config/user'
import { VercelPoweredBy } from './VercelPoweredBy'

const isVercelEnv = !!process.env.NEXT_PUBLIC_VERCEL_ENV
export const FooterInfo = () => {
  return (
    <>
      <div className='relative flex md:block center  '>
        <FooterLinkSection />
        {isVercelEnv && (
          <div className='absolute top-0 hidden lg:-right-8 lg:block'>
            <VercelPoweredBy />
          </div>
        )}
      </div>

      <FooterBottom />

      {isVercelEnv && (
        <div className='mt-6 flex justify-center lg:hidden'>
          <VercelPoweredBy />
        </div>
      )}
    </>
  )
}

const FooterLinkSection = async () => {
  return (
    <div className='space-x-0 space-y-3 md:space-x-6 md:space-y-0 '>
      {defaultLinkSections.map(section => {
        return (
          <div
            className='block space-x-4 md:inline-flex'
            key={section.name}
          >
            <b className='font-medium'>{section.name}</b>
            <span className='space-x-4 text-neutral-content/90'>
              {section.links.map(link => {
                return (
                  <StyledLink
                    external={link.external}
                    className='link-hover link'
                    href={link.href}
                    key={link.name}
                  >
                    {link.name}
                  </StyledLink>
                )
              })}
            </span>
          </div>
        )
      })}
    </div>
  )
}

const StyledLink = (
  props: JSX.IntrinsicElements['a'] & {
    external?: boolean
  }
) => {
  const { external, ...rest } = props
  const As = external ? 'a' : Link

  return (
    // @ts-ignore
    <As
      className='link-hover link'
      target={props.external ? '_blank' : props.target}
      {...rest}
    >
      {props.children}
    </As>
  )
}
const Divider: Component = ({ className }) => {
  return (
    <span className={cn('select-none whitespace-pre opacity-50', className)}> | </span>
  )
}

const FooterBottom = async () => {
  return (
    <div className='mt-12 space-y-3 text-center md:mt-6 md:text-left'>
      <p>
        <span>© 2024 </span>
        <a href='/'>{user.name}</a>
        <span>.</span>
        <span>
          <Divider />
          <a
            href='/feed'
            target='_blank'
          >
            RSS
          </a>
          <Divider />
          {/* <a
            href='/sitemap.xml'
            target='_blank'
          >
            站点地图
          </a>
          <Divider className='hidden md:inline' /> */}
        </span>
        <span className='mt-3 block md:mt-0 md:inline'>Stay hungry. Stay foolish.</span>
      </p>
      <p>
        {icp && (
          <>
            <StyledLink
              href={icp.link}
              target='_blank'
              rel='noreferrer'
            >
              {icp.text}
            </StyledLink>
          </>
        )}

        {/* <Divider className='hidden md:inline' /> */}
      </p>
    </div>
  )
}
