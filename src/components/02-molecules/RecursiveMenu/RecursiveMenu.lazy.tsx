import { type FC, type JSX, lazy, Suspense } from 'react'

import type { RecursiveMenuProps } from './RecursiveMenu.types'

const LazyRecursiveMenu = lazy(async () => await import('./RecursiveMenu'))

type LazyRecursiveMenuProps = JSX.IntrinsicAttributes & RecursiveMenuProps

const RecursiveMenu: FC<LazyRecursiveMenuProps> = (props) => (
    <Suspense fallback={null}>
        <LazyRecursiveMenu {...props} />
    </Suspense>
)

export default RecursiveMenu
