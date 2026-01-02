// @ts-nocheck
/** @type {import('stylelint').Config} */
import defaultConfig from '@tyisi/config-stylelint'

const excludeKeys = ['overrides']
const excludeExtends = [
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules'
]
const excludeRules = ['scss/comment-no-empty']

const config = Object.keys(defaultConfig)
    .filter((ck) => !excludeKeys.includes(ck))
    .reduce((c, ck) => ({ ...c, [ck]: defaultConfig[ck] }), {})

excludeExtends.map((ek) =>
    config.extends.splice(
        config.extends.findIndex((e) => e === ek),
        1
    )
)

config.rules = Object.keys(defaultConfig.rules)
    .filter((r) => !excludeRules.includes(r))
    .reduce((c, r) => ({ ...c, [r]: defaultConfig.rules[r] }), {})

config.rules['at-rule-no-unknown'] = [
    true,
    {
        ignoreAtRules: [
            'custom-variant',
            'document',
            'reference',
            'theme',
            'tailwind',
            'utility'
        ]
    }
]

config.rules['import-notation'] = 'string'

export default config
