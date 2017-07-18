import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/redux-view-binder',
    moduleName: 'ReduxViewBinder',
    external: ['lodash-es', 'lodash-es/isEqual'],
    plugins: [
        resolve(),
        eslint(),
        babel(babelrc()),
        uglify()
    ],
    targets: [
        { dest: 'dist/redux-view-binder.cjs.js', format: 'cjs' },
        { dest: 'dist/redux-view-binder.umd.js', format: 'umd' },
        { dest: 'dist/redux-view-binder.min.js', format: 'iife' }
      ]
};
