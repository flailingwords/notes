import { createContext, useContext } from 'react'

import type { ThemeProviderContextValue } from './ThemeProvider.types'

export const ThemeProviderContext =
    createContext<ThemeProviderContextValue | null>(null)

export const useThemeProviderContext = (): ThemeProviderContextValue => {
    const themeProviderContext = useContext(ThemeProviderContext)

    if (themeProviderContext == null)
        throw new Error('useThemeProviderContext was called out of context')

    return themeProviderContext
}
