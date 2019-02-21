const Public = require('./coinzip/public');

module.exports = (() => {
	class Coinzip {
		constructor({version, key, secret} = {}) {
			console.log(key, secret);
			switch (version) {
				case null:
				case undefined:
				case 'v2':
					this.version = 'v2';
					break;
				case 'v3':
				default:
					throw new Error(`version ${version} not supported`);
			}
		}

		getVersion() {
			return this.version;
		}

		getBasePath() {
			return `${Coinzip.apiUrl()}/${this.version}`;
		}

		async getTickers({market}) {
			const pub = new Public(this.getBasePath());
			return pub.getTickers({market});
		}

		static apiUrl() {
			return 'https://www.coinzip.co/api';
		}
	}

	return Coinzip;
})();
