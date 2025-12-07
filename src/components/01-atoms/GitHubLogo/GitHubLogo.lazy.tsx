import { type FC, type JSX, lazy, Suspense } from 'react'

import type { GitHubLogoProps } from './GitHubLogo.types'

const LazyGitHubLogo = lazy(async () => await import('./GitHubLogo'))

type LazyGitHubLogoProps = JSX.IntrinsicAttributes & GitHubLogoProps

const GitHubLogo: FC<LazyGitHubLogoProps> = (props) => (
    <Suspense fallback={null}>
        <LazyGitHubLogo {...props} />
    </Suspense>
)

export default GitHubLogo
