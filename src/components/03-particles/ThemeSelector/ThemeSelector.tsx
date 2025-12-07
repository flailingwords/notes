import type { FC } from 'react'

import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import NoSymbolIcon from '@heroicons/react/24/solid/NoSymbolIcon'

import type { ThemeSelectorProps } from './ThemeSelector.types'

import { useThemeProviderContext } from '@/components/08-providers/ThemeProvider/ThemeProvider.context'

import ThemeSelectorWrapper from './ThemeSelectorWrapper/ThemeSelectorWrapper'

const ThemeSelector: FC<ThemeSelectorProps> = () => {
    const { theme, setTheme } = useThemeProviderContext()

    if (theme === 'light')
        return (
            <ThemeSelectorWrapper>
                <SunIcon
                    className='size-6'
                    onClick={() => {
                        setTheme('dark')
                    }}
                />
            </ThemeSelectorWrapper>
        )

    if (theme === 'dark')
        return (
            <ThemeSelectorWrapper>
                <MoonIcon
                    className='size-6'
                    onClick={() => {
                        setTheme('system')
                    }}
                />
            </ThemeSelectorWrapper>
        )

    return (
        <ThemeSelectorWrapper>
            <NoSymbolIcon
                className='size-6'
                onClick={() => {
                    setTheme('light')
                }}
            />
        </ThemeSelectorWrapper>
    )
}

export default ThemeSelector
