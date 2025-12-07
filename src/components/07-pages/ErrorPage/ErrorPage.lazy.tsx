import { type FC, type JSX, lazy, Suspense } from 'react'

import type { ErrorPageProps } from './ErrorPage.types'

const LazyErrorPage = lazy(async () => await import('./ErrorPage'))

type LazyErrorPageProps = JSX.IntrinsicAttributes & ErrorPageProps

const ErrorPage: FC<LazyErrorPageProps> = (props) => (
    <Suspense fallback={null}>
        <LazyErrorPage {...props} />
    </Suspense>
)

export default ErrorPage
