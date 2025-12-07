import type { FC } from 'react'

import { clsx } from 'clsx'

import type { ErrorPageProps } from './ErrorPage.types'

import { getMessageFromErrorMessage } from './ErrorPage.ui'

const ErrorPage: FC<ErrorPageProps> = ({ styles, errorMessage, children }) => {
    const message = getMessageFromErrorMessage(errorMessage, children)

    return (
        <main className={clsx('main', styles?.main)}>
            <div className='w-full'>
                <div className='w-full text-center'>
                    <h1 className={clsx('title', styles?.title)}>Error</h1>
                </div>
            </div>

            <div className='w-full'>
                <div className='w-full'>
                    <p className={clsx('description', styles?.description)}>
                        Error: {message}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default ErrorPage
