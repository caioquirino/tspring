import {MyClass} from "../src/MyClass"

describe('MyClass',  () => {
  it('should work', () => {
    expect(new MyClass().isTrue(false)).toEqual(false)
  })
})
