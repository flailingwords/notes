import { createFileRoute } from '@tanstack/react-router'

import KnowledgeBaseLayout from '@/components/06-layouts/KnowledgeBaseLayout/KnowledgeBaseLayout.lazy'

export const Route = createFileRoute('/_kb')({
    component: KnowledgeBaseLayout
})
