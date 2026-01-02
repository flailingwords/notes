import type { Meta, StoryObj } from '@storybook/react-vite'

import ThemeProvider from '@/components/08-providers/ThemeProvider/ThemeProvider'

import ThemeSelector from './ThemeSelector'

const meta: Meta = {
    component: ThemeSelector
} satisfies Meta<typeof ThemeSelector>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    render: () => (
        <ThemeProvider>
            <ThemeSelector />
        </ThemeProvider>
    )
}
