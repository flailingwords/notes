import { type FC, type JSX, lazy, Suspense } from 'react'

import type { MarkdownWrapperProps } from './MarkdownWrapper.types'

const LazyMarkdownWrapper = lazy(async () => await import('./MarkdownWrapper'))

type LazyMarkdownWrapperProps = JSX.IntrinsicAttributes & MarkdownWrapperProps

const MarkdownWrapper: FC<LazyMarkdownWrapperProps> = (props) => (
    <Suspense fallback={null}>
        <LazyMarkdownWrapper {...props} />
    </Suspense>
)

export default MarkdownWrapper
