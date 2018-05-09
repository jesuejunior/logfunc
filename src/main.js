'use strict';

module.exports.hello = (event, context, callback) => {
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(function(record) {
    let payload = new Buffer(record.kinesis.data, 'base64') 
    console.log('payload: ', payload);
  });
  context.succeed();

  //TO-DO: Construct func to send to elastic
};
