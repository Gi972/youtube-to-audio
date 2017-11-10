import {length} from 'rambdax'

test('', () => {
  const result = length('foo')
  const expected = 3
  
  expect(
    result
  ).toEqual(expected)
})
