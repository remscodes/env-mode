import bundleSize from 'rollup-plugin-bundle-size'
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

/** @typedef {import('rollup').RollupOptions} RollupOptions */
/** @typedef {import('rollup').OutputOptions} OutputOptions */

const fileName = 'index';

/**
 * @param options {RollupOptions}
 * @returns {RollupOptions}
 */
function bundle(options) {
  return {
    input: `./src/${fileName}.ts`,
    ...options,
  }
}

export default [
  bundle({
    plugins: [esbuild(), bundleSize()],
    output: [
      {
        file: `./dist/cjs/${fileName}.cjs`,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        outro: 'module.exports = Object.assign(exports.default, exports);'
      },
    ]
  }),
  bundle({
    plugins: [esbuild(), bundleSize()],
    output: [
      {
        file: `./dist/esm/${fileName}.mjs`,
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ]
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `./dist/types/${fileName}.d.ts`,
      format: 'es'
    }
  })
];
