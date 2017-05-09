// Rollup plugins
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import eslint from 'rollup-plugin-eslint';

export default {
    entry: 'src/redux-view-binder',
    dest: 'dist/redux-view-binder.js',
    format: 'iife',
    moduleName: 'ReduxViewBinder',
    plugins: [
        eslint(),
        babel(babelrc())
    ]
};
