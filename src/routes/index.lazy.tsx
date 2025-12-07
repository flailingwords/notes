import { createLazyFileRoute } from '@tanstack/react-router'

import LandingPage from '@/components/07-pages/LandingPage/LandingPage.lazy'

export const Route = createLazyFileRoute('/')({
    component: LandingPage
})
