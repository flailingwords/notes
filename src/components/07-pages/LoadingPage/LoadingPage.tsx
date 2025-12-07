import type { FC } from 'react'

import type { LoadingPageProps } from './LoadingPage.types'

const LoadingPage: FC<LoadingPageProps> = () => (
    <div className='fixed top-0 right-0 bottom-0 left-0 z-10 overflow-hidden bg-black/25'>
        <div className='absolute top-1/2 left-1/2 h-fit w-fit -translate-x-[50%] -translate-y-[50%]'>
            <div className='animate-spin-slow size-8 rounded-full bg-conic/increasing from-violet-700 via-lime-300 to-violet-700'></div>
        </div>
    </div>
)

export default LoadingPage
