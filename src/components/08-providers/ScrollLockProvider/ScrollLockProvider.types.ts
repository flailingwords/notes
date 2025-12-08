import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface ScrollLockProviderContextValue {
    scrollLocked: boolean
    setScrollLocked: Dispatch<SetStateAction<boolean>>
}

export interface ScrollLockProviderProps {
    children?: ReactNode
}
