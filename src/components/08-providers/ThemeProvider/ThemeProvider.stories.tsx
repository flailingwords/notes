import type { Meta, StoryObj } from '@storybook/react-vite'

import ThemeProvider from './ThemeProvider'

const meta = {
    component: ThemeProvider
} satisfies Meta<typeof ThemeProvider>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
