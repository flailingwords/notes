import { type FC, type JSX, lazy, Suspense } from 'react'

import type { LoadingPageProps } from './LoadingPage.types'

const LazyLoadingPage = lazy(async () => await import('./LoadingPage'))

type LazyLoadingPageProps = JSX.IntrinsicAttributes & LoadingPageProps

const LoadingPage: FC<LazyLoadingPageProps> = (props) => (
    <Suspense fallback={null}>
        <LazyLoadingPage {...props} />
    </Suspense>
)

export default LoadingPage
