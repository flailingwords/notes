import { type FC, type JSX, lazy, Suspense } from 'react'

import type { LandingPageProps } from './LandingPage.types'

const LazyLandingPage = lazy(async () => await import('./LandingPage'))

type LazyLandingPageProps = JSX.IntrinsicAttributes & LandingPageProps

const LandingPage: FC<LazyLandingPageProps> = (props) => (
    <Suspense fallback={null}>
        <LazyLandingPage {...props} />
    </Suspense>
)

export default LandingPage
