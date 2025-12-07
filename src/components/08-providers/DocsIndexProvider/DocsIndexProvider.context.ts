import { createContext, useContext } from 'react'

import type { DocsIndexContextValue } from './DocsIndexProvider.types'

export const DocsIndexContext = createContext<DocsIndexContextValue | null>(
    null
)

export const useDocsIndexContext = (): DocsIndexContextValue => {
    const docsIndexContext = useContext(DocsIndexContext)

    if (docsIndexContext == null)
        throw new Error('useDocsIndexContext was called out of context')

    return docsIndexContext
}
