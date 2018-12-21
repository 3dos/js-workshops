const { describe } = require('riteway');

const stripSection = require('./stripSection')

describe('stripSection()', async assert => {
  assert({
    given: '"some/path"',
    should: 'return "path"',
    actual: stripSection('some/path'),
    expected: 'path'
  })
});
