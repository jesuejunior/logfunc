const SlackStrategy = require('./slack');
const ElasticStrategy = require('./elastic');

class Provider {
  constructor(type) {
    switch (type) {
      case 'elastic':
        this.strategy = new ElasticStrategy();
        break;
      case 'slack':
        this.strategy = new SlackStrategy();
        break;
      default:
        throw new Error('Provider not found to load the strategy');
    }
  }

}
module.exports = Provider;
