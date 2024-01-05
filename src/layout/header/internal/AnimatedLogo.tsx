'use client'

import { useQuery } from '@tanstack/react-query'
import { AnimatePresence, m } from 'framer-motion'
import { useRouter } from 'next/navigation'

import { useViewport, viewportAtom } from '@/atoms'
import { useSingleAndDoubleClick } from '@/hooks/common/use-single-double-click'
import { Routes } from '@/lib/route-builder'

// import { Activity } from './Activity'
import { useHeaderMetaShouldShow } from './hooks'
import { SiteOwnerAvatar } from './SiteOwnerAvatar'
import { ExtractAtomValue, useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'

const TapableLogo = () => {
  const router = useRouter()

  const { data: isLiving } = useQuery({
    queryKey: ['live-check'],
    enabled: false
  })

  const fn = useSingleAndDoubleClick(
    () => {
      router.push(Routes.Home)
    },
    () => {
      router.push(`${Routes.Login}?redirect=${encodeURIComponent(location.pathname)}`)
    }
  )

  return (
    <button onClick={fn}>
      <SiteOwnerAvatar className='cursor-pointer' />
      <span className='sr-only'>Owner Avatar</span>
    </button>
  )
}

const selector = (v: ExtractAtomValue<typeof viewportAtom>) => v.lg && v.w !== 0

export const AnimatedLogo = () => {
  const shouldShowMeta = useHeaderMetaShouldShow()

  const isLg = useAtomValue(selectAtom(viewportAtom, selector))

  if (isLg)
    return (
      <>
        <TapableLogo />
        {/* <Activity /> */}
      </>
    )

  return (
    <AnimatePresence>
      {!shouldShowMeta && (
        <m.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // className="scale-75"
        >
          {/* <Activity /> */}
          <TapableLogo />
        </m.div>
      )}
    </AnimatePresence>
  )
}
