'use strict';
const config = {
  aws: {
    ACCESS_KEY: process.env.AWS_ACCESS || '',
    SECRET_KEY: process.env.AWS_SECRET || '',
    REGION: process.env.AWS_REGION || 'us-west-2',
  },
  es: {
    USER: process.env.ES_USER || 'app',
    PWD: process.env.ES_PWD || 'Re84EUJB8G5eSm3Jd9DMZyKkee69sv',
    PORT: process.env.ES_PORT || 9243,
    HOST: process.env.ES_HOST || '6e640398134a11f6846f9dde0086ad.us-west-2.aws.found.io'
  }

}

module.exports = config;
