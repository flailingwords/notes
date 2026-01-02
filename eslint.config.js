import { cjs, mjs, ts, tsx } from '@tyisi/config-eslint'
import storybook from 'eslint-plugin-storybook'

ts[0].rules['@typescript-eslint/triple-slash-reference'] = 'off'
tsx[0].rules['@typescript-eslint/triple-slash-reference'] = 'off'

export default [
    {
        ignores: [
            '.wireit/',
            'dist',
            'src/routeTree.gen.ts',
            'public/mockServiceWorker.js'
        ]
    },
    ...cjs,
    ...mjs,
    ...ts,
    ...tsx,
    ...storybook.configs['flat/recommended']
]
