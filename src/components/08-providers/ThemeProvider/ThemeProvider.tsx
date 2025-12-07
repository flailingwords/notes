import { useEffect, useState, type FC } from 'react'

import type { ThemeProviderProps, ThemeTypes } from './ThemeProvider.types'

import { ThemeProviderContext } from './ThemeProvider.context'
import { isThemeType } from './ThemeProvider.guards'
import { saveTheme } from './ThemeProvider.ui'

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeTypes>(
        isThemeType(localStorage.theme) ? localStorage.theme : 'system'
    )

    useEffect(() => {
        saveTheme(theme)
    }, [theme])

    return (
        <ThemeProviderContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export default ThemeProvider
