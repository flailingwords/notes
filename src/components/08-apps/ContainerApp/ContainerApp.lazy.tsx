import { type FC, type JSX, lazy, Suspense } from 'react'

import type { ContainerAppProps } from './ContainerApp.types'

const LazyContainerApp = lazy(async () => await import('./ContainerApp'))

type LazyContainerAppProps = JSX.IntrinsicAttributes & ContainerAppProps

const ContainerApp: FC<LazyContainerAppProps> = (props) => (
    <Suspense fallback={null}>
        <LazyContainerApp {...props} />
    </Suspense>
)

export default ContainerApp
