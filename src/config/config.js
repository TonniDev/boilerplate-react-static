import {Map} from 'immutable';
import path from 'path';

const baseConfig = {
  all: {
    API_BASE_URL_EXTERNAL: process.env.API_BASE_URL_EXTERNAL || 'http://dpd.oiwip.com.br/api/v1',
    API_BASE_URL_INTERNAL: process.env.API_BASE_URL_INTERNAL || 'http://dpd.oiwip.com.br/api/v1',
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'http://dpd.oiwip.com.br/api/v1',
    publicPath: path.resolve(__dirname, '../assets')
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'http://dpd.oiwip.com.br/api/v1'
  }
};

export default Map().merge(baseConfig.all, baseConfig[baseConfig.all.env]);
