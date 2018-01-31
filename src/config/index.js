import merge from 'lodash/merge';

const config = {
  all: {
    API_BASE_URL_EXTERNAL: process.env.API_BASE_URL_EXTERNAL || 'https://jsonplaceholder.typicode.com',
    API_BASE_URL_INTERNAL: process.env.API_BASE_URL_INTERNAL || 'https://jsonplaceholder.typicode.com',
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com'
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'https://jsonplaceholder.typicode.com'
  }
};

module.exports = merge(config.all, config[config.all.env]);
