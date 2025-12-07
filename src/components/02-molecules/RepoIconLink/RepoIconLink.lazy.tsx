import { type FC, type JSX, lazy, Suspense } from 'react'

import type { RepoIconLinkProps } from './RepoIconLink.types'

const LazyRepoIconLink = lazy(async () => await import('./RepoIconLink'))

type LazyRepoIconLinkProps = JSX.IntrinsicAttributes & RepoIconLinkProps

const RepoIconLink: FC<LazyRepoIconLinkProps> = (props) => (
    <Suspense fallback={null}>
        <LazyRepoIconLink {...props} />
    </Suspense>
)

export default RepoIconLink
