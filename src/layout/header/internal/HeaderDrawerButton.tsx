'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, m } from 'framer-motion'
import { atom, useAtom } from 'jotai'

import { useIsClient } from '@/hooks/common/use-is-client'

import { HeaderActionButton } from './HeaderActionButton'
import { HeaderDrawerContent } from './HeaderDrawerContent'
import { MotionButtonBase } from '@/components/ui/motion-button'
import { DialogOverlay } from '@/components/ui/over-lay'

export const drawerOpenAtom = atom(false)

export const HeaderDrawerButton = () => {
  const [open, setOpen] = useAtom(drawerOpenAtom)

  const isClient = useIsClient()
  const ButtonElement = (
    <HeaderActionButton>
      <i className='icon-[mingcute--menu-line]' />
    </HeaderActionButton>
  )
  if (!isClient) return ButtonElement

  return (
    <Dialog.Root
      open={open}
      onOpenChange={open => setOpen(open)}
    >
      <Dialog.Trigger asChild>{ButtonElement}</Dialog.Trigger>
      <Dialog.Portal forceMount>
        <div>
          <AnimatePresence>
            {open && (
              <>
                <DialogOverlay />

                <Dialog.Content>
                  <m.dialog
                    className='fixed left-0 right-0 top-0 z-[12] m-0 block w-full overflow-auto rounded-xl bg-transparent px-3 backdrop-blur-sm overflow-x-hidden'
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Dialog.DialogClose asChild>
                      <MotionButtonBase
                        aria-label='Close Header Drawer'
                        className='absolute right-0 top-0 z-[9] p-8'
                        onClick={() => {
                          setOpen(false)
                        }}
                      >
                        <i className='icon-[mingcute--close-fill] ' />
                      </MotionButtonBase>
                    </Dialog.DialogClose>

                    <HeaderDrawerContent />
                  </m.dialog>
                </Dialog.Content>
              </>
            )}
          </AnimatePresence>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
