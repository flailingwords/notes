import type { ReactNode } from 'react'

interface ErrorPageStyles extends Record<string, string> {}

export interface ErrorPageProps {
    styles?: ErrorPageStyles
    errorMessage?: string | Error
    children?: ReactNode
}
