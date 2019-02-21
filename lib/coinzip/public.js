const request = require('request-promise');

module.exports = (() => {
  class Public {
    constructor(basepath) {
      this.basepath = basepath;
    }

    async getTickers({market}) {
      return request({uri: `${this.basepath}/tickers/${market}.json`, json: true});
    }
  }

  return Public;
})();
