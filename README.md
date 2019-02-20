# Usage
```
const Coinzip = require('./lib/coinzip');

const start = async () => {
  const coinzip = new Coinzip({key: "xxx", secret: "xxx"});
  const tickers = await coinzip.getTickers({market: "ethbtc"});
  console.log(tickers);
}

start();

```  
