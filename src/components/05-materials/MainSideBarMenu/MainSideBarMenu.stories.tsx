import type { Meta, StoryObj } from '@storybook/react-vite'

import DocsIndexProvider from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider'

import MainSideBarMenu from './MainSideBarMenu'

const meta = {
    component: MainSideBarMenu
} satisfies Meta<typeof MainSideBarMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    render: () => (
        <DocsIndexProvider>
            <MainSideBarMenu />
        </DocsIndexProvider>
    ),
    args: {}
}
