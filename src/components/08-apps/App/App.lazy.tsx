import { type FC, type JSX, lazy, Suspense } from 'react'

import type { AppProps } from './App.types'

const LazyApp = lazy(async () => await import('./App'))

type LazyAppProps = JSX.IntrinsicAttributes & AppProps

const App: FC<LazyAppProps> = (props) => (
    <Suspense fallback={null}>
        <LazyApp {...props} />
    </Suspense>
)

export default App
