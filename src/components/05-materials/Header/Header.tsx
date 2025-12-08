import type { FC } from 'react'

import { Link } from '@tanstack/react-router'
import { clsx } from 'clsx'

import type { HeaderProps } from './Header.types'

import RepoIconLink from '@/components/02-molecules/RepoIconLink/RepoIconLink'
import ThemeSelector from '@/components/03-particles/ThemeSelector/ThemeSelector'

const Header: FC<HeaderProps> = () => (
    <div
        className={clsx(
            'shadow-nav-light dark:shadow-nav-dark dark:hover:shadow-nav-dark-hover dark:bg-dark-bg bg-light-bg',
            'grid grid-flow-col justify-between *:w-fit *:min-w-32 *:p-1.5 *:align-middle'
        )}
    >
        <div>
            <Link to={import.meta.env.BASE_URL}>Nick&apos;s Notes</Link>
        </div>
        <div className='grid grid-flow-col *:min-w-6 md:*:min-w-24'>
            <ThemeSelector />
            <RepoIconLink />
        </div>
    </div>
)

export default Header
