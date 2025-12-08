import type { ReactNode } from 'react'

export const fixChildren = (children?: ReactNode[]): ReactNode[] | undefined =>
    Array.isArray(children)
        ? children.map<ReactNode>(async (e) =>
              Array.isArray(e) ? (
                  fixChildren(e)
              ) : typeof e === 'string' ? (
                  <span key={e}>{e}</span>
              ) : (
                  await e
              )
          )
        : children
