import { type FC, type JSX, lazy, Suspense } from 'react'

import type { KnowledgeBasePageProps } from './KnowledgeBasePage.types'

const LazyKnowledgeBasePage = lazy(
    async () => await import('./KnowledgeBasePage')
)

type LazyKnowledgeBasePageProps = JSX.IntrinsicAttributes &
    KnowledgeBasePageProps

const KnowledgeBasePage: FC<LazyKnowledgeBasePageProps> = (props) => (
    <Suspense fallback={null}>
        <LazyKnowledgeBasePage {...props} />
    </Suspense>
)

export default KnowledgeBasePage
