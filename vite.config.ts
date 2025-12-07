import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths(),
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true
        }),
        react(),
        tailwindcss()
    ],
    build: {
        rollupOptions: {
            output: {
                // eslint-disable-next-line complexity -- YOLO
                manualChunks(id: string): string | null | undefined {
                    if (id.includes('src/components/07-pages/'))
                        return id.replace(
                            /.*\/src\/components\/07-pages\/(\w+)\/.*/,
                            'page-$1'
                        )
                    else if (id.includes('src/components/06-layouts/'))
                        return id.replace(
                            /.*\/src\/components\/06-layouts\/(\w+)\/.*/,
                            'layout-$1'
                        )
                    else if (id.includes('src/components/08-providers/'))
                        return id.replace(
                            /.*\/src\/components\/08-providers\/(\w+)\/.*/,
                            'provider-$1'
                        )
                    else if (id.includes('src/components/'))
                        id.replace(
                            /.*\/src\/components\/\d+-(\w+)\/.*/,
                            'components-$1'
                        )
                    else if (id.includes('src/lib/')) return 'lib'
                    else if (id.includes('node_modules/.pnpm/@heroicons'))
                        return 'heroicons'
                    else if (id.includes('node_modules/.pnpm/heroicons'))
                        return 'heroicons'
                    else if (id.includes('node_modules/.pnpm/react-dom'))
                        return 'react-dom'
                    else if (id.includes('node_modules/.pnpm/react'))
                        return 'react'
                    else if (id.includes('node_modules/.pnpm/@tanstack'))
                        return 'tanstack'
                    else if (id.includes('node_modules')) return 'vendor'
                    else return null
                }
            }
        }
    }
})
