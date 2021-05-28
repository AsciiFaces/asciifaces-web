/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: '/',
        src: '/dist'
    },
    plugins: ['@snowpack/plugin-postcss', '@snowpack/plugin-dotenv'],
    routes: [
        /* Enable an SPA Fallback in development: */
        { match: 'routes', src: '.*', dest: '/index.html' }
    ],
    optimize: {
        /* Example: Bundle your final build: */
        bundle: true,
        minify: true,
        target: 'es2017',
        sourcemap: false,
        splitting: true,
        treeshake: true
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        tailwindConfig: './tailwind.config.js'
    },
    buildOptions: {
        /* ... */
    }
};
