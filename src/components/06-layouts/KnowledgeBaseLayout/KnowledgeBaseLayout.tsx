import { useMemo, type FC, type JSX } from 'react'

import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import { Link, Outlet, useLocation } from '@tanstack/react-router'

import type { KnowledgeBaseLayoutProps } from './KnowledgeBaseLayout.types'

import { capitalizeFirstLetter } from '@/lib/utils'

const KnowledgeBaseLayout: FC<KnowledgeBaseLayoutProps> = () => {
    const location = useLocation()

    const pathParts = useMemo(
        () =>
            location.pathname.replace(import.meta.env.BASE_URL, '').split('/'),
        [location]
    )

    return (
        <div>
            <div className='breadcrumb-container flex flex-row gap-1 border-b border-b-gray-500 pb-0.5'>
                {pathParts.reduce<JSX.Element[]>((c, p, i) => {
                    const shouldLink = i < pathParts.length - 1
                    const partPath = ['', ...pathParts.slice(0, i), p].join('/')

                    if (i === 0)
                        return [
                            <span key={p}>
                                <Link to={partPath}>
                                    {capitalizeFirstLetter(p)}
                                </Link>
                            </span>
                        ]

                    return [
                        ...c,
                        <ChevronDoubleRightIcon
                            key={`chevron-${p}`}
                            className='size-6 align-middle'
                        />,
                        shouldLink ? (
                            <span key={p}>
                                <Link to={partPath}>
                                    {capitalizeFirstLetter(p)}
                                </Link>
                            </span>
                        ) : (
                            <span key={p}>{capitalizeFirstLetter(p)}</span>
                        )
                    ]
                }, [])}
            </div>
            <div className='my-2.5'>
                <Outlet />
            </div>
        </div>
    )
}

export default KnowledgeBaseLayout
