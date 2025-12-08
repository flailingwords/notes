import type { FC } from 'react'

import type { RepoIconLinkProps } from './RepoIconLink.types'

import GitHubLogo from '@/components/01-atoms/GitHubLogo/GitHubLogo'

const RepoIconLink: FC<RepoIconLinkProps> = () => (
    <div>
        <a
            className='m-auto block h-6 w-6'
            href='https://github.com/flailingwords/notes'
            target='_blank'
            rel='noreferrer'
        >
            <GitHubLogo />
        </a>
    </div>
)

export default RepoIconLink
