import { createContext, useContext } from 'react'

import type { TemplateNameContextValue } from './TemplateName.types'

export const TemplateNameContext =
    createContext<TemplateNameContextValue | null>(null)

export const useTemplateNameContext = (): TemplateNameContextValue => {
    const templateNameContext = useContext(TemplateNameContext)

    if (templateNameContext == null)
        throw new Error('useTemplateNameContext was called out of context')

    return templateNameContext
}
