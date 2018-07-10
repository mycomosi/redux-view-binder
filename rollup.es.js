import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/redux-view-binder',
    output : {
        file: 'dist/redux-view-binder.es.js',
        format: 'es',
        external: ['lodash-es', 'lodash-es/isEqual']
    },
    plugins: [
        resolve(),
        eslint()
    ]
};
