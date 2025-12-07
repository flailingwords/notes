import type { FC, ReactNode } from 'react'

import { Link } from '@tanstack/react-router'
import { clsx } from 'clsx'

import type { RecursiveMenuProps } from './RecursiveMenu.types'

import { capitalizeFirstLetter } from '@/lib/utils'

const RecursiveMenu: FC<RecursiveMenuProps> = ({ taxonomy, level, prefix }) => {
    level ??= 0
    prefix ??= '/'

    const levelUp = level + 1

    if (level === 0) {
        return (
            <ul className='*:block *:border-b *:border-b-slate-500'>
                {Object.entries(taxonomy).map<ReactNode>(([k, v]) => (
                    <li key={k} className='pl-0 text-left' data-level={level}>
                        {/* @ts-expect-error -- YOLO */}
                        <Link to={`${import.meta.env.BASE_URL}${prefix}/${k}`}>
                            {capitalizeFirstLetter(k)}
                        </Link>

                        <RecursiveMenu
                            /* @ts-expect-error -- typing is hard yolo */
                            taxonomy={v}
                            level={levelUp}
                            prefix={`${prefix}/${k}`}
                        />
                    </li>
                ))}
            </ul>
        )
    }

    return Object.entries(taxonomy).map<ReactNode>(([k, v]) =>
        typeof v === 'string' ? (
            <li key={k} className='text-right' data-level={level}>
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
                    level === 1 ? 'pl-2' : null,
                    level === 2 ? 'pl-4' : null,
                    level === 3 ? 'pl-6' : null,
                    level === 4 ? 'pl-8' : null,
                    level === 5 ? 'pl-10' : null,
                    level === 6 ? 'pl-12' : null
                )}
                data-level={level}
            >
                {/* @ts-expect-error -- YOLO */}
                <Link to={`${import.meta.env.BASE_URL}${prefix}/${k}`}>
                    {capitalizeFirstLetter(k)}
                </Link>

                <RecursiveMenu
                    taxonomy={v}
                    level={levelUp}
                    prefix={`${prefix}/${k}`}
                />
            </ul>
        )
    )
}

export default RecursiveMenu
