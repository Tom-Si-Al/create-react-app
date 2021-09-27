import { isEmailValid } from "./validators";

describe('test suite', () => {
  it('returns false if the string does not contain an @', () => {
    const testString = 'thisIsATestString'
    expect(isEmailValid(testString)).toBe(false)
  })

  it('returns true if the string does contain an @', () => {
    const testString = 'thisIsATestString@'
    expect(isEmailValid(testString)).toBe(true)
  })
})