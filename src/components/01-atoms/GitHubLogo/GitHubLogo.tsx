import type { FC } from 'react'

import type { GitHubLogoProps } from './GitHubLogo.types'

import ghMarkWhite from '@/assets/github-mark-white.png'

const GitHubLogo: FC<GitHubLogoProps> = () => (
    <img
        className='size-6 invert-100 dark:invert-0'
        src={ghMarkWhite}
        alt='GitHub Logo'
    />
)

export default GitHubLogo
