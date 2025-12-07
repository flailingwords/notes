import {
    RouterProvider,
    createRootRoute,
    createRouter
} from '@tanstack/react-router'
import { initialize, mswLoader } from 'msw-storybook-addon'

import type { Preview, Decorator } from '@storybook/react-vite'

import '../src/styles/index.css'

initialize()

const RouterDecorator: Decorator = (Story) => {
    const rootRoute = createRootRoute({ component: () => <Story /> })
    const routeTree = rootRoute
    const router = createRouter({ routeTree })
    return <RouterProvider router={router} />
}

const preview: Preview = {
    decorators: [RouterDecorator],
    loaders: [mswLoader],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
}

export default preview
