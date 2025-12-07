import type { ReactNode } from 'react'

import type { RecursiveRecord } from '@/types/recursive-record'

export interface DocsIndexContextValue {
    taxonomy: RecursiveRecord
    isLoading: boolean
}

export interface DocsIndexProviderProps {
    children?: ReactNode
}
