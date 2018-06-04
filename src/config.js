'use strict';
const config = {
  aws: {
    ACCESS_KEY: process.env.AWS_ACCESS || '',
    SECRET_KEY: process.env.AWS_SECRET || '',
    REGION: process.env.AWS_REGION || 'us-west-2',
  },
  es: {
    USER: process.env.ES_USER || '',
    PWD: process.env.ES_PWD || '',
    PORT: parseInt(process.env.ES_PORT) || 9200,
    HOST: process.env.ES_HOST || '127.0.0.1',
    PROTOCOL: process.env.ES_PROTOCOL || 'http'
  }

}

module.exports = config;
