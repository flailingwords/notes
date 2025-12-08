import type { FC } from 'react'

import { SWRConfig } from 'swr'

import type { ContainerAppProps } from './ContainerApp.types'

import DocsIndexProvider from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider'
import ScrollLockProvider from '@/components/08-providers/ScrollLockProvider/ScrollLockProvider'
import ThemeProvider from '@/components/08-providers/ThemeProvider/ThemeProvider'

import { fetcher } from '@/lib/fetcher'

const ContainerApp: FC<ContainerAppProps> = ({ children }) => (
    <SWRConfig
        value={{
            fetcher
        }}
    >
        <ThemeProvider>
            <ScrollLockProvider>
                <DocsIndexProvider>{children}</DocsIndexProvider>
            </ScrollLockProvider>
        </ThemeProvider>
    </SWRConfig>
)

export default ContainerApp
