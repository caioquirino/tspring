import { AnnotationFactory } from "../src"

export type TestTypeAnnotation = AnnotationFactory.OptionalValueTypeAnnotation<string>
export const TestTypeAnnotation: TestTypeAnnotation = AnnotationFactory.createValueTypeAnnotation<string>()
export type TestNoArgsTypeAnnotation = AnnotationFactory.NoArgsTypeAnnotation
export const TestNoArgsTypeAnnotation: TestNoArgsTypeAnnotation = AnnotationFactory.createNoArgsTypeAnnotation()

export type TestMethodAnnotation = AnnotationFactory.OptionalValueMethodAnnotation<string>
export const TestMethodAnnotation: TestMethodAnnotation = AnnotationFactory.createValueMethodAnnotation<string>()
export type TestNoArgsMethodAnnotation = AnnotationFactory.NoArgsMethodAnnotation
export const TestNoArgsMethodAnnotation: TestNoArgsMethodAnnotation = AnnotationFactory.createNoArgsMethodAnnotation()

export type TestFieldAnnotation = AnnotationFactory.OptionalValueFieldAnnotation<string>
export const TestFieldAnnotation: TestFieldAnnotation = AnnotationFactory.createValueFieldAnnotation<string>()
export type TestNoArgsFieldAnnotation = AnnotationFactory.NoArgsFieldAnnotation
export const TestNoArgsFieldAnnotation: TestNoArgsFieldAnnotation = AnnotationFactory.createNoArgsFieldAnnotation()

export type TestParameterAnnotation = AnnotationFactory.OptionalValueParameterAnnotation<string>
export const TestParameterAnnotation: TestParameterAnnotation = AnnotationFactory.createValueParameterAnnotation<string>()
export type TestNoArgsParameterAnnotation = AnnotationFactory.NoArgsParameterAnnotation
export const TestNoArgsParameterAnnotation: TestNoArgsParameterAnnotation = AnnotationFactory.createNoArgsParameterAnnotation()

type TestObject = {
  testField: string
}

@TestTypeAnnotation()
@TestTypeAnnotation("value")
@TestNoArgsTypeAnnotation()
class ValidTestClass {

  @TestFieldAnnotation()
  @TestFieldAnnotation("value")
  @TestNoArgsFieldAnnotation()
  public readonly testField: string

  constructor(testField: string) {
    this.testField = testField;
  }

  @TestMethodAnnotation()
  @TestMethodAnnotation("value")
  @TestNoArgsMethodAnnotation()
  public testMethod(): TestObject {
    return {
      testField: this.testField
    }
  }

  public testParameter(
    @TestParameterAnnotation()
    @TestParameterAnnotation("value")
    @TestNoArgsParameterAnnotation()
      testParameter: string
  ): string {
    return testParameter
  }
}

// @ts-expect-error
@TestNoArgsTypeAnnotation("test") // Should be invalid to the compiler
class InvalidTestClass {

  // @ts-expect-error
  @TestNoArgsFieldAnnotation("test") // Should be invalid to the compiler
  private readonly testField: string

  // @ts-expect-error
  @TestNoArgsMethodAnnotation("test") // Should be invalid to the compiler
  public testMethod(): TestObject {
    return {
      testField: "test"
    }
  }

  public testParameter(
    // @ts-expect-error
    @TestNoArgsParameterAnnotation("test") // Should be invalid to the compiler
    testParameter: string
  ): void {}
}

describe("AnnotationFactory", () => {
  it("should compile and create the class instance", () => {
    const testValue = new ValidTestClass("test")

    expect(testValue.testMethod().testField).toEqual("test")
    expect(testValue.testParameter("test1")).toEqual("test1")
  })
})
