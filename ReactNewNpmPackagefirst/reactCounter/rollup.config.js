import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',  // Entry point
  output: [
    {
      file: 'dist/react-package.cjs.js',  // CommonJS build
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/react-package.esm.js',  // ES Module build
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/react-package.umd.js',  // UMD build for browser usage
      format: 'umd',
      name: 'ReactPackage',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),  // Externalize peer dependencies (e.g., React, ReactDOM)
    babel({
      exclude: 'node_modules/',  // Exclude node_modules from Babel transpilation
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    terser(),  // Minify the UMD build for smaller file size
  ],
};
