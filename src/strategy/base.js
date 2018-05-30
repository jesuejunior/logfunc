'use strict'


class BaseStrategy {

  process(...[]) {
    throw new Error('function not implemented yet');
  }

  sendToService(identifier, msg) {
    throw new Error('function not implemented yet');
  }

  validate(from, to, type) {
    throw new Error('function not implemented yet');
  }
}

module.exports = BaseStrategy;
