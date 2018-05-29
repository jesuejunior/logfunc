'use strict';
const crypto = require('crypto');
const elasticsearch = require('elasticsearch');
const config = require('./config');
const Formatter = require('./formatter')


class SearchService{
  constructor(){
    this.client = new elasticsearch.Client({
      host: [{
        auth: `#{config.es.USER}:#{config.es.PWD}`,
        host: config.es.HOST,
        port: config.es.PORT,
        protocol: config.es.PROTOCOL
      }],
      log: {
        type: 'stdio',
        level: 'info',
      }
    });
  }

  index(index, type, body){
    const id = crypto.randomBytes(12).toString('hex');
    const data = {
        index: index,
        type: type,
        id: id,
        body: Formatter.message(body)
      }
    return this.client.create(data)
      .then((data) => { })
      .catch((err) => {}); //TO-DO: try again
  }
  
  bulk(){} //TO-DO: implement bulk to be easy

}

module.exports = new SearchService();
