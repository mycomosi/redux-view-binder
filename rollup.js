import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import { uglify }  from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/redux-view-binder',
    output : [{
        name: 'ReduxViewBinder',
        external: ['lodash-es', 'lodash-es/isEqual'],
        file : 'dist/redux-view-binder.cjs.js',
        format: 'cjs'
    },
    {
        name: 'ReduxViewBinder',
        external: ['lodash-es', 'lodash-es/isEqual'],
        file : 'dist/redux-view-binder.umd.js',
        format: 'umd'
    },
    {
        name: 'ReduxViewBinder',
        external: ['lodash-es', 'lodash-es/isEqual'],
        file : 'dist/redux-view-binder.min.js',
        format: 'iife'
    }
    ],
    plugins: [
        resolve(),
        eslint(),
        babel(babelrc()),
        uglify()
    ]
};
