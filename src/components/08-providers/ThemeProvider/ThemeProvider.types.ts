import type { Dispatch, ReactNode, SetStateAction } from 'react'

export type ThemeTypes = 'system' | 'dark' | 'light'

export interface ThemeProviderContextValue {
    theme: ThemeTypes
    setTheme: Dispatch<SetStateAction<ThemeTypes>>
}

export interface ThemeProviderProps {
    children?: ReactNode
}
