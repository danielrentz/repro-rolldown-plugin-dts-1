import { defineConfig } from 'tsdown'
export default defineConfig({
  entry: [
    'src/index1.ts',
    'src/index2.ts',
    // 'src/index3.ts',
  ],
  dts: true,
  exports: true,
  target: false,
})
