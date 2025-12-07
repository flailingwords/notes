import { type FC, type JSX, lazy, Suspense } from 'react'

import type { MainSideBarMenuProps } from './MainSideBarMenu.types'

const LazyMainSideBarMenu = lazy(async () => await import('./MainSideBarMenu'))

type LazyMainSideBarMenuProps = JSX.IntrinsicAttributes & MainSideBarMenuProps

const MainSideBarMenu: FC<LazyMainSideBarMenuProps> = (props) => (
    <Suspense fallback={null}>
        <LazyMainSideBarMenu {...props} />
    </Suspense>
)

export default MainSideBarMenu
