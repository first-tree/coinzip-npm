import test from 'ava';
import Coinzip from '../lib/coinzip';

test('Check if apiUrl is defined', t => {
  t.is(Coinzip.apiUrl(), 'https://www.coinzip.co/api'); 
});

test('Intialize a new Coinzip instance without parameters', t => {
  const coinzip = new Coinzip()

  t.is(coinzip.version, 'v2');
  t.is(coinzip.getVersion(), 'v2');
  t.truthy(coinzip.getBasePath);
});
