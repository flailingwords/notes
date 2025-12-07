import { type FC, type JSX, lazy, Suspense } from 'react'

import type { HeaderProps } from './Header.types'

const LazyHeader = lazy(async () => await import('./Header'))

type LazyHeaderProps = JSX.IntrinsicAttributes & HeaderProps

const Header: FC<LazyHeaderProps> = (props) => (
    <Suspense fallback={null}>
        <LazyHeader {...props} />
    </Suspense>
)

export default Header
