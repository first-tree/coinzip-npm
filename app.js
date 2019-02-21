const Coinzip = require('./lib/coinzip');

module.exports = (_ => Coinzip)();

/**

# How to use:

const Coinzip = require('coinzip');

const start = async () => {
	const coinzip = new Coinzip({key: 'xxx', secret: 'xxx'});
	const tickers = await coinzip.getTickers({market: 'ethbtc'});
	console.log(tickers);
};

start();
**/
