import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'test/test.js',
  output : {
      file: 'test/transpiled/tests.js',
      format: 'es',
      sourceMap: false
  },
  plugins: [
    resolve(),
    eslint(),
    babel(babelrc())
  ]
};
