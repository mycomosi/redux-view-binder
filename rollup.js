// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
//import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import babelrc from 'babelrc-rollup';
//import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/redux-view-binder',
    dest: 'dist/redux-view-binder.js',
    format: 'es',
    sourceMap: 'inline',
    plugins: [
        eslint(),
        babel(babelrc())
    ]
};
