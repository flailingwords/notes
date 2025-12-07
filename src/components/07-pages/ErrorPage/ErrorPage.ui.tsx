import type { JSX } from 'react'

import type { ErrorPageProps } from './ErrorPage.types'

export const getMessageFromErrorMessage = (
    errorMessage: ErrorPageProps['errorMessage'],
    children?: ErrorPageProps['children']
): JSX.Element => {
    if (errorMessage != null)
        if (typeof errorMessage === 'string') return <>{errorMessage}</>
        else return <>{errorMessage.message}</>
    else if (children != null) return <>{children}</>
    else return <>Unknown error</>
}
