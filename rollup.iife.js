import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/redux-view-binder',
    output : {
        file: 'dist/redux-view-binder.js',
        format: 'iife',
        name: 'ReduxViewBinder',
        external: ['lodash-es', 'lodash-es/isEqual']
    },
    plugins: [
        resolve(),
        eslint(),
        babel(babelrc())
    ]
};
