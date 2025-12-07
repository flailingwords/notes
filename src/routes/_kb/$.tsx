import { createFileRoute } from '@tanstack/react-router'

import KnowledgeBasePage from '@/components/07-pages/KnowledgeBasePage/KnowledgeBasePage.lazy'

export const Route = createFileRoute('/_kb/$')({
    component: KnowledgeBasePage
})
