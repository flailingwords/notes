import type { RecursiveRecord } from '@/types/recursive-record'

export interface RecursiveMenuProps {
    taxonomy: RecursiveRecord
    level?: number
    prefix?: string
}
