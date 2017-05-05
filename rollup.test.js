// Rollup plugins
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import eslint from 'rollup-plugin-eslint';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
  entry: 'test/es6/**/*.js',
  dest: 'test/transpiled/tests.js',
  format: 'es',
  sourceMap: false,
  plugins: [
    multiEntry(),
    eslint(),
    babel(babelrc())
  ]
};
