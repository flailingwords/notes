import { useMemo, type FC } from 'react'

import { useLocation } from '@tanstack/react-router'
import useSWR from 'swr'

import type { KnowledgeBasePageProps } from './KnowledgeBasePage.types'

import MarkdownWrapper from '@/components/05-materials/MarkdownWrapper/MarkdownWrapper.lazy'
import { useDocsIndexContext } from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider.context'

import type { FetcherException } from '@/lib/exceptions/FetcherException'
import { handleFrontMatter } from '@/lib/frontmatter'

import ErrorPage from '../ErrorPage/ErrorPage'
import LoadingPage from '../LoadingPage/LoadingPage'
import TopicLevelPage from '../TopicLevelPage/TopicLevelPage'

// eslint-disable-next-line complexity -- YOLO
const KnowledgeBasePage: FC<KnowledgeBasePageProps> = () => {
    const docsIndex = useDocsIndexContext()

    const location = useLocation()

    const pathParts = useMemo(
        () =>
            location.pathname.replace(import.meta.env.BASE_URL, '').split('/'),
        [location]
    )

    const docEndpoint = useMemo(() => {
        if (docsIndex.isLoading) return null

        // TODO improve this
        // @ts-expect-error -- YOLO
        return pathParts.reduce((c, e) => c[e], docsIndex.taxonomy)
    }, [pathParts])

    const { data, isLoading, error } = useSWR<string, FetcherException>(
        !docsIndex.isLoading && typeof docEndpoint === 'string'
            ? `${import.meta.env.BASE_URL}${docEndpoint}`.replace(
                  '//docs',
                  '/docs'
              )
            : null
    )

    if (docsIndex.isLoading || isLoading) return <LoadingPage />

    if (error != null) return <ErrorPage errorMessage={error} />

    if (typeof docEndpoint === 'string' && typeof data === 'string') {
        const frontMatter = handleFrontMatter(data)

        return (
            <MarkdownWrapper
                data={data}
                docEndpoint={docEndpoint}
                frontMatter={frontMatter}
            />
        )
    }

    if (
        docEndpoint != null &&
        typeof docEndpoint === 'object' &&
        !Array.isArray(docEndpoint)
    )
        return <TopicLevelPage childNodes={docEndpoint} />

    return (
        <ErrorPage
            errorMessage={'Unknown docEndpoint! Don&apos;t know what to do!'}
        />
    )
}

export default KnowledgeBasePage
