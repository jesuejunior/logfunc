'use strict';
const _ = require('lodash');

class Formatter{
  constructor(){}

  static message(msg){
    ///eventType/docType
    const meta = msg.metadata;
    const data = _.omit(msg, ['metadata', 'docType', 'eventType'] );
    const doc = _.merge(data, meta)
    return doc;
  }
}

module.exports = Formatter;
