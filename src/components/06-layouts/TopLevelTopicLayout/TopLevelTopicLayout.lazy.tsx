import { type FC, type JSX, lazy, Suspense } from 'react'

import type { TopLevelTopicLayoutProps } from './TopLevelTopicLayout.types'

const LazyTopLevelTopicLayout = lazy(
    async () => await import('./TopLevelTopicLayout')
)

type LazyTopLevelTopicLayoutProps = JSX.IntrinsicAttributes &
    TopLevelTopicLayoutProps

const TopLevelTopicLayout: FC<LazyTopLevelTopicLayoutProps> = (props) => (
    <Suspense fallback={null}>
        <LazyTopLevelTopicLayout {...props} />
    </Suspense>
)

export default TopLevelTopicLayout
