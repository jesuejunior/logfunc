// 'use strict';
const _ = require('lodash');
const BaseStrategy = require('./base');

class SlackStrategy extends BaseStrategy {

  process(msg) {
    console.log('starting...');
  }

  validate(from, to, type) {
    console.log('checking data');
  }

  treatSomethingJustForSlack(msg){
  
  }

  sendToService(type, msg) {
    console.log('SENDING TO SLACK RIGHT NOW');
  }
}

module.exports = SlackStrategy;

