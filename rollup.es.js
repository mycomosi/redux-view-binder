import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/redux-view-binder',
    dest: 'dist/redux-view-binder.es.js',
    format: 'es',
    external: ['lodash-es', 'lodash-es/isEqual'],
    plugins: [
        resolve(),
        eslint()
    ]
};
