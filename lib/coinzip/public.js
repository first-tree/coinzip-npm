const req = require('request-promise');

const request = (lib, basepath) => path => lib({uri: `${basepath}/${path}`, json: true});

class Public {
  constructor(basepath) {
    /**
     *Neccesary for dependency inversion specially for testing,
     *instead of using sinon or other mocking framework.
     **/
    this.request = request(req, basepath);
  }

  async getTickers({market}) {
    return this.request(`/tickers/${market}.json`);
  }
}

module.exports = Public;
