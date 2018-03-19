const occurence = require('./utils')

describe('occurence()', () => {

  it('should return type object', () => {
    expect(typeof occurence(['Hello', 'World!!'])).toBe('object')
  })

  it('Should return below result', () => {
    let
      array = ['A', 'B', 'A', 'A', 'B'],
      expected = {
        'A': { index: [0,2,3], length: 3 },
        'B': { index: [1,4], length: 2 }
      }

    expect(occurence(array)).toEqual(expected)
  })

})
