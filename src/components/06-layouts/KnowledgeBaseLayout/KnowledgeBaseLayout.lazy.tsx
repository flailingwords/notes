import { type FC, type JSX, lazy, Suspense } from 'react'

import type { KnowledgeBaseLayoutProps } from './KnowledgeBaseLayout.types'

const LazyKnowledgeBaseLayout = lazy(
    async () => await import('./KnowledgeBaseLayout')
)

type LazyKnowledgeBaseLayoutProps = JSX.IntrinsicAttributes &
    KnowledgeBaseLayoutProps

const KnowledgeBaseLayout: FC<LazyKnowledgeBaseLayoutProps> = (props) => (
    <Suspense fallback={null}>
        <LazyKnowledgeBaseLayout {...props} />
    </Suspense>
)

export default KnowledgeBaseLayout
