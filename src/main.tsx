import { StrictMode } from 'react'

import { createRouter, RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

import ErrorPage from '@/components/07-pages/ErrorPage/ErrorPage'
import LoadingPage from '@/components/07-pages/LoadingPage/LoadingPage'

import { getRootElement } from './main.ui'
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({
    routeTree,
    context: {},
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: () => <LoadingPage />,
    defaultErrorComponent: ({ error }) => (
        <ErrorPage errorMessage={error.message} />
    ),
    basepath: import.meta.env.BASE_URL
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Render the app
const rootElement = getRootElement('root')

const root = ReactDOM.createRoot(rootElement)

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
