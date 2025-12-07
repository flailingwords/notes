import type { ThemeTypes } from './ThemeProvider.types'

const validThemeTypes = ['system', 'dark', 'light']

export const isThemeType = (inp?: unknown): inp is ThemeTypes =>
    typeof inp === 'string' && validThemeTypes.includes(inp)
