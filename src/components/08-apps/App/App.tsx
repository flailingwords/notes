import type { FC } from 'react'

import '@/styles/index.css'

import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import type { AppProps } from './App.types'

import Header from '@/components/05-materials/Header/Header'
import MainSideBarMenu from '@/components/05-materials/MainSideBarMenu/MainSideBarMenu'

const App: FC<AppProps> = () => (
    <div className='container'>
        <Header />

        <div className='relative flex flex-col md:flex-row'>
            <div className='dark:shadow-sidemenu-dark shadow-sidemenu-light fixed top-20 bottom-0 left-0 hidden h-full min-h-dvh w-56 gap-2 px-1 md:flex'>
                <MainSideBarMenu />
            </div>
            <div className='dark:shadow-main-dark shadow-main-light relative right-4 -mt-8 ml-56 min-h-1/2 w-auto border px-2 py-1 md:min-w-7/8'>
                <Outlet />
            </div>
        </div>
        {import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
    </div>
)

export default App
