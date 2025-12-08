import { createContext, useContext } from 'react'

import type { ScrollLockProviderContextValue } from './ScrollLockProvider.types'

export const ScrollLockProviderContext =
    createContext<ScrollLockProviderContextValue | null>(null)

export const useScrollLockProviderContext =
    (): ScrollLockProviderContextValue => {
        const scrollLockProviderContext = useContext(ScrollLockProviderContext)

        if (scrollLockProviderContext == null)
            throw new Error(
                'useScrollLockProviderContext was called out of context'
            )

        return scrollLockProviderContext
    }
