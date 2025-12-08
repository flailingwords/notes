import { type FC, type JSX, lazy, Suspense } from 'react'

import type { MainContentContainerProps } from './MainContentContainer.types'

const LazyMainContentContainer = lazy(
    async () => await import('./MainContentContainer')
)

type LazyMainContentContainerProps = JSX.IntrinsicAttributes &
    MainContentContainerProps

const MainContentContainer: FC<LazyMainContentContainerProps> = (props) => (
    <Suspense fallback={null}>
        <LazyMainContentContainer {...props} />
    </Suspense>
)

export default MainContentContainer
