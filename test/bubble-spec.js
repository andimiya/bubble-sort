const bubble = require('../routes/bubble');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

let testArray = [ 5, 8, 1, 4, 2, 9, 7, 6, 3 ];
let sortedArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

describe('Finished Sort', () => {
  it('should all be sorted', function() {
    expect(sortedArray).to.include.members([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('Starting Array', () => {
  it('should be an array with sortable values', function() {
    expect(testArray).to.include.members([5, 8, 1, 4, 2, 9, 7, 6, 3]);
  });
});