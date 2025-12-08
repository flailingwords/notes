import type { FC } from 'react'

import type { MainContentContainerProps } from './MainContentContainer.types'

const MainContentContainer: FC<MainContentContainerProps> = ({ children }) => (
    <div className='dark:bg-dark-bg bg-light-bg dark:shadow-main-dark dark:hover:shadow-main-dark-hover shadow-main-light mb-12 px-2 py-1'>
        {children}
    </div>
)

export default MainContentContainer
