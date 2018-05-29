'use strict';
const SearchService = require('./searchService');

module.exports.run = (event, context, callback) => {
  event.Records.forEach(function(record) {
    let payload = new Buffer(record.kinesis.data, 'base64') 
    
    SearchService.index(
      index=payload.index,
      type=payload.type,
      body=payload
    );
  });
  context.succeed();
};
