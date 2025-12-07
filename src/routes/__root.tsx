import { createRootRoute } from '@tanstack/react-router'

import App from '@/components/08-apps/App/App'
import ContainerApp from '@/components/08-apps/ContainerApp/ContainerApp'

export const Route = createRootRoute({
    component: () => (
        <ContainerApp>
            <App />
        </ContainerApp>
    )
})
