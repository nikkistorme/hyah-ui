import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import dts from 'vite-plugin-dts'
import vitePluginCssInjectedByJs from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginCssInjectedByJs(),
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `hyah-vue.${format}.js`
    },
    cssCodeSplit: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: ['vue'],
      output: {
        // Preserve module directory structure in the build output to support tree shaking.
        preserveModules: true,
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    }
  }
})
