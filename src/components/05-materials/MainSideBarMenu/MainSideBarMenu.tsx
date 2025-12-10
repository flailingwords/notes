/* eslint-disable complexity -- YOLO FIX TODO */
import { useContext, useEffect, useState, type FC } from 'react'

import { XMarkIcon } from '@heroicons/react/16/solid'
import { useLocation } from '@tanstack/react-router'
import { clsx } from 'clsx'
import { useMedia } from 'react-use'

import type { MainSideBarMenuProps } from './MainSideBarMenu.types'

import RecursiveMenu from '@/components/02-molecules/RecursiveMenu/RecursiveMenu'
import LoadingPage from '@/components/07-pages/LoadingPage/LoadingPage'
import { DocsIndexContext } from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider.context'
import { useScrollLockProviderContext } from '@/components/08-providers/ScrollLockProvider/ScrollLockProvider.context'

const baseStyle =
    'main-sidebar-menu dark:bg-dark-bg bg-light-bg dark:shadow-sidemenu-dark dark:hover:shadow-sidemenu-dark-hover shadow-sidemenu-light'

const MainSideBarMenu: FC<MainSideBarMenuProps> = () => {
    const { setScrollLocked } = useScrollLockProviderContext()
    const docsIndexContext = useContext(DocsIndexContext)

    const useDrawer = useMedia('(max-width: 768px)')

    const pathname = useLocation({
        select: (location) => location.pathname
    })

    const [currentLocation, setCurrentLocation] = useState(pathname)

    const [drawerOpen, setDrawerOpen] = useState(false)

    useEffect(() => {
        if (pathname !== currentLocation) {
            setDrawerOpen(false)
            setCurrentLocation(pathname)
        }
    }, [pathname, currentLocation])

    useEffect(() => {
        setScrollLocked(drawerOpen)
    }, [drawerOpen])

    if (docsIndexContext?.taxonomy == null) return <LoadingPage />

    if (useDrawer && !drawerOpen)
        return (
            <button
                className={clsx(
                    baseStyle,
                    'h-24 w-2 translate-y-1/2 overflow-hidden rounded-r-2xl border md:overflow-visible'
                )}
                onClick={() => {
                    setDrawerOpen(!drawerOpen)
                }}
                onKeyUp={() => {
                    setDrawerOpen(!drawerOpen)
                }}
            >
                &nbsp;
            </button>
        )

    if (!useDrawer || drawerOpen)
        return (
            <div
                className={clsx(
                    baseStyle,
                    useDrawer ? '' : 'w-0 md:w-56',
                    useDrawer && drawerOpen ? 'w-[80dvw]' : 'w-0',
                    !useDrawer || drawerOpen ? 'px-2' : '',
                    'h-full gap-2 overflow-hidden md:w-56 md:overflow-visible',
                    'relative'
                )}
            >
                <div className='mt-1 grid w-full justify-end'>
                    <button
                        className={clsx(
                            useDrawer ? 'block' : 'hidden',
                            'h-6 w-6'
                        )}
                        onClick={() => {
                            setDrawerOpen(!drawerOpen)
                        }}
                    >
                        <XMarkIcon />
                    </button>
                </div>
                <RecursiveMenu taxonomy={docsIndexContext.taxonomy} />
            </div>
        )
}

export default MainSideBarMenu
