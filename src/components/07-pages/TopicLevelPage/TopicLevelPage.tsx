import type { FC } from 'react'

import { Link } from '@tanstack/react-router'

import type { TopicLevelPageProps } from './TopicLevelPage.types'

import { capitalizeFirstLetter } from '@/lib/utils'

const TopicLevelPage: FC<TopicLevelPageProps> = ({ childNodes }) => (
    <div className='flex flex-row flex-wrap justify-center gap-2'>
        {Object.keys(childNodes).map((cn) => (
            <div
                key={cn}
                className='border-x-link-light dark:border-x-link-dark rounded-lg border-x-4 px-2'
            >
                {/* @ts-expect-error OVERRIDE YOLO */}
                <Link to={`./${cn}`}>{capitalizeFirstLetter(cn)}</Link>
            </div>
        ))}
    </div>
)

export default TopicLevelPage
