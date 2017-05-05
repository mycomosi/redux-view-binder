// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import babelrc from 'babelrc-rollup';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/redux-view-binder',
    dest: 'dist/redux-view-binder.min.js',
    format: 'iife',
    sourceMap: false,
    moduleName: 'ReduxViewBinder',
    plugins: [
        eslint(),
        babel(babelrc()),
        uglify()
    ]
};
