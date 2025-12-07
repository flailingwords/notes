import type { FC } from 'react'

import type { ThemeSelectorWrapperProps } from './ThemeSelectorWrapper.types'

const ThemeSelectorWrapper: FC<ThemeSelectorWrapperProps> = ({ children }) => (
    <div className='m-auto size-6'>{children}</div>
)

export default ThemeSelectorWrapper
