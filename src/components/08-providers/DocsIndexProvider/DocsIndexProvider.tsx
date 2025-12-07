import { useMemo, type FC } from 'react'

import useSWR from 'swr'

import type {
    DocsIndexContextValue,
    DocsIndexProviderProps
} from './DocsIndexProvider.types'

import ErrorPage from '@/components/07-pages/ErrorPage/ErrorPage'
import LoadingPage from '@/components/07-pages/LoadingPage/LoadingPage'

import { DocsIndexContext } from './DocsIndexProvider.context'

const DocsIndexProvider: FC<DocsIndexProviderProps> = ({ children }) => {
    const { data, isLoading, error } = useSWR<DocsIndexContextValue, Error>(
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- STORYBOOK YOLO
        `${import.meta.env.BASE_URL ?? '/'}docs/index.json`
    )

    const val = useMemo<DocsIndexContextValue>(
        () => Object.assign({ taxonomy: {}, isLoading }, data ?? {}),
        [data]
    )

    if (isLoading && data == null) return <LoadingPage />

    if (error != null) return <ErrorPage />

    return (
        <DocsIndexContext.Provider value={val}>
            {children}
        </DocsIndexContext.Provider>
    )
}

export default DocsIndexProvider
