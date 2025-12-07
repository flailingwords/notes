import type { FC } from 'react'

import { SWRConfig } from 'swr'

import type { ContainerAppProps } from './ContainerApp.types'

import DocsIndexProvider from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider'
import ThemeProvider from '@/components/08-providers/ThemeProvider/ThemeProvider'

import { fetcher } from '@/lib/fetcher'

const ContainerApp: FC<ContainerAppProps> = ({ children }) => (
    <SWRConfig
        value={{
            fetcher
        }}
    >
        <ThemeProvider>
            <DocsIndexProvider>{children}</DocsIndexProvider>
        </ThemeProvider>
    </SWRConfig>
)

export default ContainerApp
