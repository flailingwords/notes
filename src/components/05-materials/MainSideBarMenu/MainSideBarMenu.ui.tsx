import type { ReactNode } from 'react'

import { Link } from '@tanstack/react-router'
import { clsx } from 'clsx'

import { capitalizeFirstLetter } from '@/lib/utils'

export const generateMenu = (
    taxonomy: Record<
        string,
        | string
        | Record<string, unknown>
        | Record<string, string | Record<string, unknown>>
    >,
    level = 0,
    prefix = '/'
): ReactNode => {
    const levelUp = level + 1

    return Object.entries(taxonomy).map(async ([k, v]) =>
        typeof v === 'string' ? (
            <li key={k} className='text-right'>
                {/* @ts-expect-error OVERRIDE YOLO */}
                <Link to={`${import.meta.env.BASE_URL}${prefix}/${k}`}>
                    {k}
                </Link>
            </li>
        ) : (
            <ul
                key={k}
                className={clsx(
                    'text-left',
                    level === 0 ? 'pl-0' : null,
                    level === 1 ? 'pl-3' : null,
                    level === 2 ? 'pl-6' : null,
                    level === 3 ? 'pl-9' : null,
                    level === 4 ? 'pl-10' : null,
                    level === 5 ? 'pl-15' : null,
                    level === 6 ? 'pl-18' : null
                )}
            >
                {/* @ts-expect-error -- YOLO */}
                <Link to={`${import.meta.env.BASE_URL}${prefix}/${k}`}>
                    {capitalizeFirstLetter(k)}
                </Link>

                {
                    // @ts-expect-error -- typing is hard yolo
                    await generateMenu(v, levelUp, `${prefix}/${k}`)
                }
            </ul>
        )
    )
}
