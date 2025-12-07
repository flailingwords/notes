import { type FC, type JSX, lazy, Suspense } from 'react'

import type { TemplateNameProps } from './TemplateName.types'

const LazyTemplateName = lazy(async () => await import('./TemplateName'))

type LazyTemplateNameProps = JSX.IntrinsicAttributes & TemplateNameProps

const TemplateName: FC<LazyTemplateNameProps> = (props) => (
    <Suspense fallback={null}>
        <LazyTemplateName {...props} />
    </Suspense>
)

export default TemplateName
