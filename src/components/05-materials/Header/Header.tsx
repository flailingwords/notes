import type { FC } from 'react'

import { Link } from '@tanstack/react-router'

import type { HeaderProps } from './Header.types'

import RepoIconLink from '@/components/02-molecules/RepoIconLink/RepoIconLink'
import ThemeSelector from '@/components/03-particles/ThemeSelector/ThemeSelector'

const Header: FC<HeaderProps> = () => (
    <div className='shadow-nav-light dark:shadow-nav-dark dark:bg-dark-bg bg-light-bg fixed top-0 right-0 left-0 z-10 grid h-10 grid-cols-2 opacity-100 *:w-fit *:min-w-32 *:p-1.5 *:align-middle'>
        <div className='justify-self-start'>
            <Link to={import.meta.env.BASE_URL}>Nick&apos;s Notes</Link>
        </div>
        <div className='flex flex-row justify-self-end *:w-fit *:min-w-32'>
            <ThemeSelector />
            <RepoIconLink />
        </div>
    </div>
)

export default Header
