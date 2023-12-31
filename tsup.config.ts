import {defineConfig} from 'tsup';

const tsupConfig = defineConfig({
  entry: ['tests/mocks/index.ts'],
  clean: true,
  format: 'esm',
  outDir: 'mocks',
});

export default tsupConfig;
