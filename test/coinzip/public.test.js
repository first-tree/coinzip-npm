import test from 'ava';
import Public from '../../lib/coinzip/public';

const MOCK_BASE_PATH = 'https://mock.coinzip.com/api/v2';
const ERROR = '404 - "404 Not Found"';
const pub = new Public(MOCK_BASE_PATH);

test('Make sure all methods are defined', t => {
  t.truthy(pub.getTickers);
});

/**
 * Make Sure all methods are Promise-ified.
 * No need make an actual http requests
 * This is not actually necessary but I
 * just put it for documentation purposes and also
 * to check the actual behaviors.
 **/

test('getTickers() returns an error if market is undefined or missing', async t => {
  const error = await t.throwsAsync(() => pub.getTickers(), Error);

  t.truthy(error.message);
});

test('getTickers() returns error if market doesn\'t exists', async t => {
  pub.request = () => Promise.reject(new Error(ERROR));

  const error = await t.throwsAsync(() => pub.getTickers({market: 'non-existing-market'}));

  t.is(error.message, ERROR);
});

test('getTickers returns proper response', async t => {
  const GET_TICKER_RESPONSE = {
    at: 1550749357,
    ticker: {
      buy: '0.0',
      sell: '0.0',
      low: '0.03387009',
      high: '0.03397093',
      last: '0.03387009',
      vol: '0.0'
    }
  };
  pub.request = () => Promise.resolve(GET_TICKER_RESPONSE);

  const resp = await pub.getTickers({market: 'bchbtc'});

  t.is(resp, GET_TICKER_RESPONSE);
});
