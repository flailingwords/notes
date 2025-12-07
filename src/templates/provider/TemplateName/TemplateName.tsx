import type { FC } from 'react'

import type { TemplateNameProps } from './TemplateName.types'

import { TemplateNameContext } from './TemplateName.context'

const TemplateName: FC<TemplateNameProps> = ({ children }) => (
    <TemplateNameContext.Provider value={{}}>
        {children}
    </TemplateNameContext.Provider>
)

export default TemplateName
