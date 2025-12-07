// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { js, ts, tsx } from '@tyisi/config-eslint'
import storybook from 'eslint-plugin-storybook'

ts[0].rules['@typescript-eslint/triple-slash-reference'] = 'off'
tsx[0].rules['@typescript-eslint/triple-slash-reference'] = 'off'

export default [
    { ignores: ['dist', 'src/routeTree.gen.ts'] },
    ...js,
    ...ts,
    ...tsx,
    ...storybook.configs['flat/recommended']
]
