// @ts-nocheck
import { generateChangelog } from '@tyisi/config-changelog'

const config = generateChangelog()

config.list = Object.values(config.types)
    .map((t) => t.value)
    .sort()

export default config
