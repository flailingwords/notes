import { useContext, type FC } from 'react'

import type { MainSideBarMenuProps } from './MainSideBarMenu.types'

import RecursiveMenu from '@/components/02-molecules/RecursiveMenu/RecursiveMenu'
import LoadingPage from '@/components/07-pages/LoadingPage/LoadingPage'
import { DocsIndexContext } from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider.context'

const MainSideBarMenu: FC<MainSideBarMenuProps> = () => {
    const docsIndexContext = useContext(DocsIndexContext)

    if (docsIndexContext?.taxonomy == null) return <LoadingPage />

    return (
        <div className='h-max w-full'>
            <RecursiveMenu taxonomy={docsIndexContext.taxonomy} />
        </div>
    )
}

export default MainSideBarMenu
