import { useEffect, useState, type FC } from 'react'

import type { ScrollLockProviderProps } from './ScrollLockProvider.types'

import { ScrollLockProviderContext } from './ScrollLockProvider.context'

const ScrollLockProvider: FC<ScrollLockProviderProps> = ({ children }) => {
    const [scrollLocked, setScrollLocked] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle('scroll-lock', scrollLocked)
    }, [scrollLocked])

    return (
        <ScrollLockProviderContext.Provider
            value={{ scrollLocked, setScrollLocked }}
        >
            {children}
        </ScrollLockProviderContext.Provider>
    )
}

export default ScrollLockProvider
