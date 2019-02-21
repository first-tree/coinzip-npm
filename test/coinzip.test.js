import test from 'ava';
import Coinzip from '../lib/coinzip';

test('Throws an error if version passed is invalid', t => {
  const version = 'v4';
  const error = t.throws(() => new Coinzip({version}), Error);
  t.is(error.message, `version ${version} not supported`);
});

test('Check if apiUrl is defined', t => {
  t.is(Coinzip.apiUrl(), 'https://www.coinzip.co/api');
});

test('Intialize a new Coinzip instance without parameters', t => {
  const coinzip = new Coinzip();

  t.is(coinzip.version, 'v2');
  t.is(coinzip.getVersion(), 'v2');
  t.truthy(coinzip.getVersion);
  t.truthy(coinzip.getBasePath);
});
