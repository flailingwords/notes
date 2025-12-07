import { type FC, type JSX, lazy, Suspense } from 'react'

import type { TopicLevelPageProps } from './TopicLevelPage.types'

const LazyTopicLevelPage = lazy(async () => await import('./TopicLevelPage'))

type LazyTopicLevelPageProps = JSX.IntrinsicAttributes & TopicLevelPageProps

const TopicLevelPage: FC<LazyTopicLevelPageProps> = (props) => (
    <Suspense fallback={null}>
        <LazyTopicLevelPage {...props} />
    </Suspense>
)

export default TopicLevelPage
