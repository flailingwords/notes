import type { Meta, StoryObj } from '@storybook/react-vite'

import TemplateName from './TemplateName'

const meta: Meta = {
    component: TemplateName
} satisfies Meta<typeof TemplateName>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
