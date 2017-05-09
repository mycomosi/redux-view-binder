// Rollup plugins
import eslint from 'rollup-plugin-eslint';

export default {
    entry: 'src/redux-view-binder',
    dest: 'dist/redux-view-binder.es.js',
    format: 'es',
    plugins: [
        eslint()
    ]
};
